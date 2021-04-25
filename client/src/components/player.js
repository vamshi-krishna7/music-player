import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {skipSongForward, skipSongBackward, getSongs} from '../actions/songAction';


const Player = (props) => {
    const {audioRef, songInfo, setSongInfo, isPlaying, setIsPlaying, currentSong, skipSongForward, skipSongBackward } = props;

    

    const onClickHandler = () => {
        if(isPlaying === false){
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
        if(isPlaying === true){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }
    }
    
    const formatTime = (time) => {
        return (
            Math.floor(time/60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const seekBar = (e) => {
        setSongInfo({...songInfo, currentTime: e.target.value})
        audioRef.current.currentTime = e.target.value;
    }

    const skipSong = (skip) => {
        
        if (skip === 'skip-forward') {
            skipSongForward(currentSong[0].id)    
        }
        if (skip === 'skip-backward') {
            skipSongBackward(currentSong[0].id)
        }
    }

    

    return(
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.totalDuration || 0} value={songInfo.currentTime} onChange={seekBar}/>
                <p>{formatTime(songInfo.totalDuration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="previous-play" icon={faAngleLeft} size="2x"  onClick={() => skipSong("skip-backward")}/>
                <FontAwesomeIcon className="play" icon={isPlaying === true ? faPause : faPlay} size="2x" onClick={onClickHandler} />
                <FontAwesomeIcon className="next-play" icon={faAngleRight} size="2x"  onClick={() => skipSong("skip-forward")}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    songs: state.songs.songs,
    currentSong: state.songs.currentSong
})

export default connect(mapStateToProps, {skipSongForward, skipSongBackward, getSongs})(Player);

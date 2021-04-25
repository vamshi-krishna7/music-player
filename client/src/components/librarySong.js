import React from 'react';
import {setNewCurrentSong} from '../actions/songAction';
import {connect} from 'react-redux';

const LibrarySong = (props) => {
    const {singleSong: {cover, name, artist, id}, setNewCurrentSong, audioRef, isPlaying} = props;

    const SongSelectedHandler = () => {
        setNewCurrentSong(id)
        if(isPlaying){
            const playPromise = audioRef.current.play()
            if(playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play()
                })
            }
        }
        
    }   
    return(
        <div className="library-song-card" onClick={SongSelectedHandler}>
            <div className="song-card-image">
                <img src={cover} alt="cover"/>
            </div>
            <div className="song-card-details">
                <h2>{name}</h2>
                <h4>{artist}</h4>
            </div>
        </div>
    )
}

export default connect(null, {setNewCurrentSong})(LibrarySong);
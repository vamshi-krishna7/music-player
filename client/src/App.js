import React, {useRef, useState, useEffect} from 'react';
import Song from './components/song';
import Player from './components/player';
import Library from './components/library';
import './styles/app.scss';
import { connect } from 'react-redux';
import {getSongs, getCurrentSong} from './actions/songAction';
import Navbar from './components/navbar';

const App = (props) => {

  useEffect(() => {
    props.getSongs()
    props.getCurrentSong()
}, [])
  
  const {currentSong} = props;
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    totalDuration: 0
  })
  const [libraryActive, setLibraryActive] = useState(false)

  const timeUpdateHandler = (e) => {
    // console.log(e.target.currentTime)
    // console.log(e.target.duration)
    setSongInfo({
        ...songInfo,
        currentTime: e.target.currentTime,
        totalDuration: e.target.duration
    })
  }

  return (
    <div className={`app ${libraryActive ? 'active' : ''}`}>
    <Navbar libraryActive={libraryActive} setLibraryActive={setLibraryActive} />
      <Song 
        currentSong={currentSong}
      />
      <Player 
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library 
        libraryActive={libraryActive} 
        setLibraryActive={setLibraryActive}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={props.currentSong && props.currentSong[0].audio} 
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentSong: state.songs.currentSong
})


export default connect(mapStateToProps, {getCurrentSong, getSongs})(App);

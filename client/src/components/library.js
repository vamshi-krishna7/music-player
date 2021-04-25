import React from 'react';
import LibrarySong from './librarySong';
import {connect} from 'react-redux';

const Library = (props) => {
    const {songs, audioRef, isPlaying, libraryActive} = props;
    return(
        <div className={`library ${libraryActive ? 'active' : null}`}>
            <h2 className="library-header">library</h2>
            
                {  
                    songs === null || songs.length === 0 ? <h1>loading....</h1> : songs.map((singleSong) => (
                        <LibrarySong key={singleSong.id} singleSong={singleSong} audioRef={audioRef} isPlaying={isPlaying}/>
                    ))
                }
        </div>
    )
}
const mapStateToProps = (state) => ({
    songs: state.songs.songs,
    current: state.songs.current
})

export default connect(mapStateToProps)(Library);
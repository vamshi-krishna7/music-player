import React from 'react';
import {connect} from 'react-redux';
import {getSongs, getCurrentSong} from '../actions/songAction';

const Song = (props) => {




    return (
        <div className="song-container">
            <img src={props.currentSong && props.currentSong[0].cover} alt="cover" className="song-cover"/>
                {
                    props.currentSong === null || props.currentSong.length === 0 ? <h1>loading...</h1>  : 
                    (   <React.Fragment>
                            <h1>{props.currentSong[0].name}</h1>
                            <h2>{props.currentSong[0].artist}</h2>
                        </React.Fragment>
                    )
                }
        </div>
    )
}

export default connect(null, {getSongs, getCurrentSong})(Song);


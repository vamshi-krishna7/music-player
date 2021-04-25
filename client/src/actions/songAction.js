import axios from 'axios';
import {GET_SONGS, CURRENT_SONG, SET_NEW_CURRENT_SONG, SKIP_SONG_FORWARD, SKIP_SONG_BACKWARD} from './types';

export const getSongs = () => async(dispatch) => {
    const res = await axios.get('http://localhost:5000/data') 
    dispatch({
        type: GET_SONGS,
        payload: res.data
    })
}

export const getCurrentSong = () => async(dispatch) => {
    const res = await axios.get('http://localhost:5000/data') 
    dispatch({
        type: CURRENT_SONG,
        payload: res.data
    })
}

export const setNewCurrentSong = (id) => async(dispatch) => {
    dispatch({
        type: SET_NEW_CURRENT_SONG,
        payload: id
    })
}

export const skipSongForward = (id) => async(dispatch) => {
    dispatch({
        type: SKIP_SONG_FORWARD,
        payload: id
    })
}
export const skipSongBackward = (id) => async(dispatch) => {
    dispatch({
        type: SKIP_SONG_BACKWARD,
        payload: id
    })
}

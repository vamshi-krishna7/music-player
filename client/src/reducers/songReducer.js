import {GET_SONGS, CURRENT_SONG, SET_NEW_CURRENT_SONG, SKIP_SONG_FORWARD, SKIP_SONG_BACKWARD} from '../actions/types';

const initialState = {
    songs: null,
    currentSong: null
}

export default (state=initialState, action) => {

    switch(action.type) {
        case GET_SONGS:
            return {
                ...state,
                songs: action.payload,
            }
        case CURRENT_SONG: 
        const filterCurrentSong = action.payload.filter((song) => song.active === true)
            return {
                ...state,
                currentSong: filterCurrentSong
            }
            case SET_NEW_CURRENT_SONG: 
            const setNewCurrentSong = state.songs.filter((song) => song.id === action.payload)
                return {
                    ...state,
                    currentSong: setNewCurrentSong
                }

            case SKIP_SONG_FORWARD :
                if(action.payload < state.songs.length){
                    console.log(action.payload)
                    const forwardInd = state.songs.filter((song) => song.id === (action.payload + 1))
                    return {
                        ...state,
                        currentSong: forwardInd
                    }
                }else if(action.payload === state.songs.length){
                    console.log(action.payload)
                    const forwardInd = state.songs[0]
                    console.log(forwardInd)
                    return {
                        ...state,
                        currentSong: [forwardInd]
                    }
                }break;
                case SKIP_SONG_BACKWARD :
                if(action.payload > 1){
                    console.log(action.payload)
                    const backwardIdn = state.songs.filter((song) => song.id === (action.payload - 1))
                    return {
                        ...state,
                        currentSong: backwardIdn
                    }
                }else if(action.payload <= 1){
                    console.log(action.payload)
                    const backwardIdn = state.songs[state.songs.length-1]
                    console.log(backwardIdn)
                    return {
                        ...state,
                        currentSong: [backwardIdn]
                    }
                }break;
        default: 
        return {
            ...state
        }
    }
}

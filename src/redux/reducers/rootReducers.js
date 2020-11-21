/*************************************
*            ROOT-REDUCER            *
**************************************/
import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { channelReducer } from './channelReducer'
import { pageReducer } from './pageReducer'
import { posterReducer } from './posterReducer'
import { speakerReducer } from './speakerReducer'
import { userReducer } from './userReducer'



export const rootReducers = combineReducers({
    auth: authReducer,
    channel: channelReducer,
    page: pageReducer,
    user: userReducer,
    speaker: speakerReducer,
    poster: posterReducer
})
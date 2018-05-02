import { combineReducers } from 'redux'
import baseIntro from './reducers/baseIntro'
import heroes from './reducers/heroes'

export default combineReducers({
    baseIntro,
    heroes
})
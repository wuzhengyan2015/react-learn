import { combineReducers } from 'redux'
import baseIntro from './reducers/baseIntro'
import heroes from './reducers/heroes'
import items from  './reducers/items'
import maps from  './reducers/maps'

export default combineReducers({
    baseIntro,
    heroes,
    items,
    maps
})
import { combineReducers } from 'redux'
import baseIntro from './reducers/baseIntro'
import heroes from './reducers/heroes'
import items from  './reducers/items'

export default combineReducers({
    baseIntro,
    heroes,
    items
})
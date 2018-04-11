import { combineReducers } from 'redux'
import articles from './reducers/article'
import drops from './reducers/drop'
import lifes from './reducers/life'
import archive from './reducers/archive'


export default combineReducers({
    articles,
    drops,
    lifes,
    archive
})
import { combineReducers } from 'redux'
import articles from './reducers/article'
import drops from './reducers/drop'

export default combineReducers({
    articles,
    drops
})
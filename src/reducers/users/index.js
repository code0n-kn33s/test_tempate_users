import { combineReducers } from 'redux'

import usersList from './usersList.reducer'
import userSingle from './userSingle.reducer'

const reducer = combineReducers({
  list: usersList,
  single: userSingle
})

export default reducer

import { combineReducers } from 'redux'

import users from './users/users.reducer'

const reducer = combineReducers({ users })

export default reducer

import { usersConst } from '../../const'

const initialState = {
  usersList: [],
  filtredList: [],
  isLoadedUsersList: false,
  wasDelete: false,
  err: ''
};

function users(state = initialState, action){
  switch( action.type ){
    case usersConst.REQ_USERS_DATA:
      return {
        ...state,
        isLoadedUsersList: false
      }
    case usersConst.RES_USERS_DATA:
      return {
        ...state,
        isLoadedUsersList: true,
        usersList: action.payload
      }
    case usersConst.ERR_USERS_DATA:
      return {
        ...state,
        err: action.payload
      }

    case usersConst.REQ_USER_DEL_DATA:
      return {
        ...state,
        wasDelete: false
      }
    case usersConst.RES_USER_DEL_DATA:
      let newList = state.usersList.filter(item => {
        return parseInt(item.id) !== parseInt(action.payload)
      })
      return {
        ...state,
        wasDelete: true,
        usersList: newList
      }
    case usersConst.ERR_USER_DEL_DATA:
      return {
        ...state,
        err: action.payload
      }
    case usersConst.ERISE_USERS_DATA:
      return {
        ...initialState
      }
    case usersConst.FILTER_USERS_DATA:
      return {
        ...state,
        filtredList: action.payload
      }

    default:
      return state;
  }
}

export default users
import { usersConst } from '../../const'

const initialState = {
  data:  null,
  loaded:false,
  loading: false,
  err: null
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
    default:
      return state;
  }
}

export default users
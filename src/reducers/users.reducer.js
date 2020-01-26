import { usersConst } from '../const'

const initialState = {
  usersList: [],
  filtredList: null,
  isLoadedUsersList: false,

  isCreate: false,

  isLoadedSingle: false,
  dataSingle: null,
  errSingle: '',

  wasDelete: false,
  isEdited: false,
  err: ''
};

function users(state = initialState, action) {
  switch (action.type) {
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
    case usersConst.REQ_USER_DATA:
      return {
        ...state,
        isLoadedSingle: false
      }
    case usersConst.RES_USER_DATA:
      let userData = state.usersList.find( user => {
        return user.id === action.payload
      })
      return {
        ...state,
        isLoadedSingle: true,
        dataSingle: userData
      }
    case usersConst.ERR_USER_DATA:
      return {
        ...state,
        isLoadedSingle: false,
        errSingle: action.err
      }

    case usersConst.REQ_CREATE_USER:
      return {
        ...state,
        isCreate: false
      }
    case usersConst.RES_CREATE_USER:
      state.usersList.unshift(action.payload)
      return {
        ...state,
        isCreate: true
      }

    case usersConst.ERR_CREATE_USER:
      return {
        ...state,
        isCreate: false,
        errSingle: action.err
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
    case usersConst.RES_USER_EDIT_DATA:
      let changedList = state.usersList.map(item => {
        if (parseInt(item.id) === parseInt(action.payload)) {
          item = action.body
        }
        return item
      })
      return {
        ...state,
        isEdited: true,
        usersList: changedList
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
    case usersConst.RESET_USERS_DATA:
      return {
        ...state,
        filtredList: action.payload
      }
    case usersConst.FILTER_USERS_DATA:
      return {
        ...state,
        filtredList: action.payload
      }
    case usersConst.SORT_USERS_DATA:
      return {
        ...state,
        filtredList: action.payload
      }

    default:
      return state;
  }
}

export default users
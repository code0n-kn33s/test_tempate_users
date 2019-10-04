import axios from 'axios'

import { usersConst } from '../const'
import { filterData } from '../helpers/findData'
import { getRandomGender } from '../helpers/getRandom'

const getUsersData = () => ( dispatch ) => {
  dispatch( { type: usersConst.REQ_USERS_DATA } )

  axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then( res => {
      let costumArr = res.data.map( (user, index) => {
        const createGender = getRandomGender()
        return({
            ...user,
            gender: createGender,
            costumAvatar: `https://i.pravatar.cc/150?img=${index}`
          })
        }
      )
      return costumArr
    })
    .then( res => {
      dispatch({
        type: usersConst.RES_USERS_DATA,
        payload: res
      })
    })
    .catch( error => {
      dispatch({
        type: usersConst.ERR_USERS_DATA,
        payload: error
      })
    })
}

const deleteUser = (id) => (dispatch) => {
  dispatch({
    type: usersConst.REQ_USER_DEL_DATA
  })
  axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
  .then(() =>
    dispatch({
      type: usersConst.RES_USER_DEL_DATA,
      payload: id
    })
  )
  .catch(err =>
    dispatch({
      type: usersConst.ERR_USER_DEL_DATA,
      payload: err
    })
  )
}

const startEditUser = (id) => (dispatch) => {
  console.log('USER ID', id)
}

const eriseUsersData = () => (dispatch) => {
  dispatch({ type: usersConst.ERISE_USERS_DATA });
}

const filterUsersData = (e, obj) => (dispatch, state) => {
  const usersList = state().users.usersList
  const filtered = filterData(e, usersList)

  dispatch({
    type: usersConst.FILTER_USERS_DATA,
    payload: filtered
  })
}

export const usersActions = {
  getUsersData,
  deleteUser,
  startEditUser,
  eriseUsersData,
  filterUsersData
}
import axios from 'axios'

import { usersConst } from '../const'
import { filterData } from '../helpers/findData'
import { getRandomGender } from '../helpers/getRandom'

const getUsersData = () => ( dispatch ) => {
  dispatch( { type: usersConst.REQ_USERS_DATA } )

  axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then( res => {
      let costumArr = res.data.data.map( (user, index) => {
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

const getUserData = (id) => ( dispatch ) => {
  dispatch( { type: usersConst.REQ_USER_DATA } )

  axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
    .then( () => {
      dispatch({
        type: usersConst.RES_USER_DATA,
        payload: id
      })
    })
    .catch( error => {
      dispatch({
        type: usersConst.ERR_USER_DATA,
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

const editUser = (id, body, history, message) => (dispatch) => {
  dispatch({ type: usersConst.REQ_USER_EDIT_DATA })

  axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, JSON.stringify(body), {
    headers: { "Content-Type": "application/json/x-www-form-urlencoded" }
  })
  .then( () => {
    dispatch({
      type: usersConst.RES_USER_EDIT_DATA,
      payload: id,
      body: body,
    })
  })
  .then( () => {
    history.push('/dashboard')
  })
  .catch(err =>
    dispatch({
      type: usersConst.ERR_USER_EDIT_DATA,
      payload: err
    })
  )
}

const createUser = (body, history) => (dispatch) => {
  dispatch({ type: usersConst.REQ_CREATE_USER })

  axios.post("http://dummy.restapiexample.com/api/v1/create", JSON.stringify({
    name: body.employee_name,
    age: body.employee_age,
    salary: body.employee_salary
  }), {
    headers: { "Content-Type": "application/json/x-www-form-urlencoded" }
  })
  .then( (res) => {
    dispatch({
      type: usersConst.RES_CREATE_USER,
      payload: {
        id: res.data.data.id,
        gender: getRandomGender(),
        costumAvatar: `https://i.pravatar.cc/150?img=${res.data.data.id}`,
        ...body
      },
    })
  })
  .then( () => {
    history.push('/dashboard')
  })
  .catch(err =>
    dispatch({
      type: usersConst.ERR_CREATE_USER,
      payload: err
    })
  )
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
  getUserData,
  filterUsersData,
  editUser,
  createUser,
  deleteUser,
  eriseUsersData,
}
import axios from 'axios'

import { usersConst } from '../const'
import { filterData } from '../helpers/findData'

import { sortString } from '../helpers/sortData'
import { sortNumber } from '../helpers/sortData'

const getUsersData = () => (dispatch) => {
  dispatch({ type: usersConst.REQ_USERS_DATA })

  axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => {
      let costumArr = res.data.data.map((user, index) => {
        return ({
          ...user,
          costumAvatar: `https://i.pravatar.cc/150?img=${index}`
        })
      }
      )
      return costumArr
    })
    .then(res => {
      dispatch({
        type: usersConst.RES_USERS_DATA,
        payload: res
      })
    })
    .catch(error => {
      dispatch({
        type: usersConst.ERR_USERS_DATA,
        payload: error
      })
    })
}

const getUserData = (id) => (dispatch) => {
  dispatch({ type: usersConst.REQ_USER_DATA })

  axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
    .then(() => {
      dispatch({
        type: usersConst.RES_USER_DATA,
        payload: id
      })
    })
    .catch(error => {
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

const editUser = (id, body, history) => (dispatch) => {
  dispatch({ type: usersConst.REQ_USER_EDIT_DATA })

  axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, JSON.stringify(body), {
    headers: { "Content-Type": "application/json/x-www-form-urlencoded" }
  })
    .then(() => {
      dispatch({
        type: usersConst.RES_USER_EDIT_DATA,
        payload: id,
        body: body,
      })
    })
    .then(() => {
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
    .then((res) => {
      dispatch({
        type: usersConst.RES_CREATE_USER,
        payload: {
          id: `${res.data.data.id}`,
          costumAvatar: `https://i.pravatar.cc/150?img=${res.data.data.id}`,
          ...body
        },
      })
    })
    .then(() => {
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

const resetUsersData = () => (dispatch, state) => {
  const usersList = state().users.usersList

  dispatch({
    type: usersConst.RESET_USERS_DATA,
    payload: usersList
  })
}

const filterUsersData = (e) => (dispatch, state) => {
  const usersList = state().users.usersList
  const filtered = filterData(e, usersList)
  const value = e.target.value

  dispatch({
    type: usersConst.FILTER_USERS_DATA,
    payload: value !== '' ? filtered : usersList
  })
}

const sortUsersData = (type, prop, desc) => (dispatch, state) => {
  const usersList = state().users.usersList.slice()
  let sorted = []

  if (type === "Number") {
    sorted = sortNumber(usersList, prop, desc)
  } else {
    sorted = sortString(usersList, prop, desc)
  }

  dispatch({
    type: usersConst.SORT_USERS_DATA,
    payload: sorted
  })
}

export const usersActions = {
  getUsersData,
  getUserData,
  filterUsersData,
  sortUsersData,
  editUser,
  createUser,
  deleteUser,
  eriseUsersData,
  resetUsersData
}
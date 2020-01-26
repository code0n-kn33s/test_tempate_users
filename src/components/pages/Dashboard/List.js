import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import UsersListItem from './ListItem'
import SortItem from './SortItem'
import Preloader from '../../common/Preloader'

import { Input, List as ListAnt, Button } from 'antd'
import { usersActions } from '../../../actions'

class UsersList extends Component {
  state = {
    iconLoading: false,
    employee_name: null,
    employee_salary: null,
    employee_age: null
  }

  componentDidMount() {
    this.props.getListUsers()
  }

  componentWillUnmount() {
    this.props.eriseData()
  }

  sortColData = (type, value) => () => {
    this.setState({
      [value]: this.state[value] === null || this.state[value] === false ? true : false
    })

    this.props.sortData(type, value, this.state[value])
  }

  resetSort = () => {
    this.props.resetData()
    this.setState({
      employee_name: null,
      employee_salary: null,
      employee_age: null
    })
  }

  addNewUser = () => {
    this.setState({ iconLoading: true })

    setTimeout(() => this.setState({ iconLoading: false }), 1500)
  }

  render() {
    const { isLoaded, data } = this.props

    return (
      <>
        <div className="main-head">
          <div className="main-head-top">
            <h2>UserList</h2>
            <Link to="/dashboard/create">
              <Button
                type="primary"
                icon="plus"
                loading={this.state.iconLoading}
                onClick={this.addNewUser}
              >
                Add User
              </Button>
            </Link>
          </div>
          <div className="main-head-search">
            <Input
              placeholder="Basic usage"
              onChange={this.props.filterUsers(data)}
            />
            <div className="main-head-sort-list">
              <SortItem
                sortAction={this.sortColData('String', 'employee_name')}
                viewArrow={this.state.employee_name}
                title="name"
              />
              <SortItem
                sortAction={this.sortColData('Number', 'employee_age')}
                viewArrow={this.state.employee_age}
                title="age"
              />
              <SortItem
                sortAction={this.sortColData('Number', 'employee_salary')}
                viewArrow={this.state.employee_salary}
                title="salary"
              />
              <div onClick={() => this.resetSort()} className="main-head-search-reset">RESET</div>
            </div>
          </div>
          <hr className="sepor" />
        </div>
        <div className="main-users_list">
          {
            isLoaded && Array.isArray(data) ?
              (
                <ListAnt
                  grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xxl: 3 }}
                  itemLayout="vertical"
                  size="large"
                  pagination={{ pageSize: 6 }}
                  dataSource={data}
                  renderItem={props => (
                    <UsersListItem
                      key={props.id}
                      {...props}
                      showDrawer={this.showDrawer}
                    />
                  )}
                />
              ) :
              (
                <div>
                  <Preloader />
                </div>
              )
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { filtredList, usersList } = state.users
  return ({
    isLoaded: state.users.isLoadedUsersList,
    data: filtredList ? filtredList : usersList
  })
}

const mapDispatchToProps = (dispatch) => ({
  getListUsers: () => {
    dispatch(usersActions.getUsersData())
  },
  getSingleUser: (id) => {
    dispatch(usersActions.getUserData(id))
  },
  filterUsers: (obj) => (e) => {
    dispatch(usersActions.filterUsersData(e, obj))
  },
  sortData: (type, value, desc) => {
    dispatch(usersActions.sortUsersData(type, value, desc))
  },
  eriseData: () => {
    dispatch(usersActions.eriseUsersData())
  },
  resetData: () => {
    dispatch(usersActions.resetUsersData())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList))
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Input, List as ListAnt, Button } from 'antd'
import UsersListItem from './ListItem'

import Preloader from '../../common/Preloader'

import { usersActions } from '../../../actions'

class UsersList extends Component {
  state = {
    iconLoading: false
  }

  componentDidMount() {
    this.props.getListUsers()
  }

  componentWillUnmount() {
    this.props.eriseData()
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
            <Input placeholder="Basic usage" onChange={this.props.filterUsers(data)} />
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
    data: filtredList.length !== 0 ? filtredList : usersList
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
  eriseData: () => {
    dispatch(usersActions.eriseUsersData())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList))
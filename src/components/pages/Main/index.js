import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, List as ListAnt } from 'antd'

import { usersActions } from '../../../actions/index'
import Preloader from './../../common/Preloader'
import UsersListItem from './UsersListItem'

class Main extends Component {
  componentDidMount() {
    this.props.getListUsers()
  }

  componentWillUnmount() {
    this.props.eriseData()
  }

  render() {
    const { isLoadedUsersList, usersList } = this.props.usersData

    return (
      <>
        <div className="main-head">
          <div className="main-head-search">
            <Input placeholder="Basic usage" onChange={ this.props.filterUsers(usersList) }/>
          </div>
          <hr className="sepor" />
        </div>
        {
            isLoadedUsersList && Array.isArray(usersList) ?
              (
                <>
                  <ListAnt
                    grid={{
                      gutter: 16,
                      xs: 1,
                      sm: 2,
                      md: 2,
                      lg: 3,
                      xxl: 3,
                    }}
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: page => {
                        console.log(page);
                      },
                      pageSize: 15,
                    }}
                    dataSource={usersList}
                    renderItem={props => (
                      <UsersListItem key={props.id} {...props} />
                    )}
                  />
                </>
              ) :
              (
                <div>
                  <Preloader/>
                </div>
              )
          }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  usersData: state.users
})

const mapDispatchToProps = (dispatch) => ({
  getListUsers: () => {
    dispatch(usersActions.getUsersData())
  },
  filterUsers: (obj) => (e) => {
    dispatch(usersActions.filterUsersData(e, obj))
  },
  eriseData: () => {
    dispatch(usersActions.eriseUsersData());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
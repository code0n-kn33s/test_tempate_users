
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, List as ListAnt } from 'antd'

import { usersActions } from '../../../actions/index'
import Preloader from '../../common/Preloader'
import UsersListItem from './UsersListItem'

class UsersList extends Component {
  componentDidMount() {
    this.props.getListUsers()
  }

  componentWillUnmount() {
    this.props.eriseData()
  }

  render() {
    const { isLoadedUsersList, usersList } = this.props.usersData;
    const { data } =  this.props;

    return (
      <>
        <div className="main-head">
          <div className="main-head-search">
            <Input placeholder="Basic usage" onChange={ this.props.filterUsers(usersList) }/>
          </div>
          <hr className="sepor" />
        </div>
        {
            isLoadedUsersList && Array.isArray(data) ?
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
                    dataSource={data}
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

const mapStateToProps = (state) => {
  const  { filtredList, usersList } = state.users.list;
  return ({
    usersData: state.users.list,
    data: filtredList.length !== 0 ? filtredList : usersList
  })
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
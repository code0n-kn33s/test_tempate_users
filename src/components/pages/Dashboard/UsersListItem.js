import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Button, message } from 'antd'
import { Table, Row, Cell } from './Table'

import { usersActions } from '../../../actions'

class UsersListItem extends React.Component {
  state = {
    iconLoading: false
  }

  deleteUserAction = (id) => {
    this.setState({ iconLoading: true})

    this.props.deleteUser(id)

    setTimeout( () => this.setState({ iconLoading: false}), 2000 )

    message
      .loading('Removing Data in progress..', 2)
      .then(() => message.success('Remove is finished', 2))
  }


  render() {
    const { currentList } = this.props
    return (
      <>
        <Table className="pagination-table">
          {
            currentList && currentList.map((user, key) => {
              return (
                <Row key={key}>
                  <Cell type="img">
                    <img src={user.costumAvatar} alt="img" />
                  </Cell>
                  <Cell type="large">{user.employee_name}</Cell>
                  <Cell type="medium">{user.employee_age} years</Cell>
                  <Cell type="medium">￥ {user.employee_salary}</Cell>
                  <Cell type="medium">
                    <Link to={`/dashboard/${user.id}/edit`} >
                      <Button shape="circle" icon="edit" />
                    </Link>
                    <Button
                      type="secondary"
                      icon="delete"
                      shape="circle"
                      onClick={() => this.deleteUserAction(user.id)}
                      loading={this.state.iconLoading}
                    />
                  </Cell>
                </Row>
              )
            })
          }
        </Table>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  removing: state.users.wasDelete,
})

const getDispatchToProps = (dispatch) => ({
  deleteUser: (id) => {
    dispatch(usersActions.deleteUser(id))
  }
})

export default connect(mapStateToProps, getDispatchToProps)(UsersListItem)
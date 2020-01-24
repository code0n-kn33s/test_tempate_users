import React from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Button, Icon, message } from 'antd'
import { Link } from 'react-router-dom'

import { usersActions } from '../../../actions'

class ListItem extends React.Component {
  state = {
    iconLoading: false
  }

  IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  )

  deleteUserAction = (id) => {
    this.setState({ iconLoading: true})

    this.props.deleteUser(id)

    setTimeout( () => this.setState({ iconLoading: false}), 2000 )

    message
      .loading('Removing Data in progress..', 2)
      .then(() => message.success('Remove is finished', 2))
  }

  render = () => {
    const { id, costumAvatar, employee_name, employee_salary, employee_age } = this.props;

    return (
      <div className="main-users-list-item">
        <List.Item
          actions={
            [
              <Link to={`/dashboard/${id}/edit`} ><Button shape="circle" icon="edit"/></Link>,
              <Button
                type="secondary"
                icon="delete"
                shape="circle"
                onClick={() => this.deleteUserAction(id)}
                loading={this.state.iconLoading}
              ></Button>
            ]
          }
        >

          <List.Item.Meta
            avatar={<Avatar src={costumAvatar} />}
            title={
              <div>
                {employee_name && employee_name !== '' ? employee_name : 'John Dou'}
              </div>
            }
            description={
              (
                <>
                  <div>
                    <b>ID: </b>{id}
                  </div>
                  <div>
                    {`Money: ￥ ${employee_salary !== 0 && employee_salary ? employee_salary : 'No money'}`}
                  </div>
                  <div>
                    {`Age: ${employee_age && employee_age > 0 ? employee_age : "Immortal"}`}
                  </div>
                </>
              )
            }
          />
        </List.Item>
      </div>
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

export default connect(mapStateToProps, getDispatchToProps)(ListItem);
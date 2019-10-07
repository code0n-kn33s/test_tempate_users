import React from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Button, Icon, message } from 'antd'
import { Link } from 'react-router-dom'

import { usersActions } from '../../../actions'

class ListItem extends React.Component {

  IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  isDeleted = () => {
    message.info('User deleted successful');
  };

  render = () => {
    const {
      id,
      costumAvatar,
      employee_name,
      employee_salary,
      employee_age
    } = this.props;

    return (
      <div className="main-users-list-item">
        <List.Item
          actions={
            [
              <Link to={`/edit/${id}`}>
                <Button shape="circle" icon="edit"/>
              </Link>,

              <Button shape="circle" icon="delete" onClick={ this.props.deleteUser(id) }/>
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
                    <b>ID: </b>{ id }
                  </div>
                  <div>
                    {`Money: ￥ ${employee_salary !== 0 && employee_salary ? employee_salary : 'No money' }`}
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

const getStateToProps = (state) => ({
  // usersData: state.users
})

const getDispatchToProps = (dispatch) => ({
  deleteUser: ( id ) => (e) => {
    dispatch(  usersActions.deleteUser(id) )
  },
  startEditUser: (id) => (e) => {
    dispatch( usersActions.startEditUser(id) )
  }
})

export default connect(getStateToProps, getDispatchToProps)(ListItem);
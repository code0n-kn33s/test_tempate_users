import React from 'react'
import { connect } from 'react-redux';
import { Drawer, Divider, Col, Row } from 'antd';

import {usersActions} from '../../../actions';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

class UserEdit extends React.Component {
  state = {
    closed: false,
    visible: true
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.props.history.push('/dashboard');
  };

  componentDidMount(){
    // this.props.getData( this.props.match.params.id);
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <div onClick={this.showDrawer}>
          {this.props.children}
        </div>
        <Drawer
          width={440}
          onClose={this.onClose}

          title="Basic Drawer"
          placement="right"
          closable={false}
          visible={this.state.visible}
        >
          <button onClick={ (e)=>  this.props.editUser(id)}>  EDIT USER </button>
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersData: state.users.list
})

const mapDispatchToProps = (dispatch) => ({
  editUser: (id, body) => {
    dispatch( usersActions.editUser(1, {
      "name": 'from action',
      "salary":  'from action',
      "age": "55"
    }) )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
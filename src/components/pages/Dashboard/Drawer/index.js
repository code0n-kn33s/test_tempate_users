import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Drawer } from 'antd'

import Info from './Info'
import Edit from './Edit'
import Create from './Create'

import Preloader from '../../../common/Preloader'

import { usersActions } from '../../../../actions'

class index extends React.Component {
  state = {
    closed: false
  }

  componentDidMount() {
    this.props.getDataUser(this.props.match.params.id)
  }

  onClose = () => {
    this.props.history.push('/dashboard')
  }

  render () {
    const { onClose } = this
    const { isLoaded } = this.props

    return (
      <Drawer
        title="User Profile"
        width={440}
        onClose={onClose}
        placement="right"
        closable={true}
        visible={true}
      >
      {
        isLoaded ?
          <Switch>
            <Route exact path="/dashboard/:id/info" component={Info}/>
            <Route exact path="/dashboard/:id/edit" component={Edit}/>
            <Route exact path="/dashboard/create" component={Create}/>
          </Switch>
          : <Preloader/>
      }
    </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.users.isLoadedSingle
})

const mapDispatchToProps = (dispatch) => ({
  getDataUser: (id) => {
    dispatch(usersActions.getUserData(id))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index))
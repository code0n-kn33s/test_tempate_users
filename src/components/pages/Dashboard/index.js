import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import UsersList from './UsersList'
import UserEdit from './UserEdit'

const index = () => {
  return(
    <>
      <h1>INDEX</h1>
      <Switch>
        <Route exact path="/dashboard" component={UsersList} />
        <Route exact path="/dashboard/:id" component={UserEdit}/>
      </Switch>
    </>
  )
}

export default index
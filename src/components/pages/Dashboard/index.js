import React from 'react'
import { Switch, Route } from 'react-router-dom'

import List from './List'
import Drawer from './Drawer'

const index = () => {
  return(
    <>
      <List/>
      <Switch>
        <Route path="/dashboard/:id" component={Drawer}/>
      </Switch>
    </>
  )
}

export default index
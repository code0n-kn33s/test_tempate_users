import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListController from './ListController'
import Drawer from './Drawer'

const index = () => {
  return(
    <>
      <ListController/>
      <Switch>
        <Route path="/dashboard/:id" component={Drawer}/>
      </Switch>
    </>
  )
}

export default index
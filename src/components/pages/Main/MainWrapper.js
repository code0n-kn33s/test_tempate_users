import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Main from './index'
import UserInfoDrawer from './UserInfoDrawer';

const MainWrapper = () => {


  return(
    <>
      <Switch>
          <Route path="/dashboard" component={Main} />
      </Switch>

      <Switch>
        <Redirect push exact from="/dashboard/edit" to="/dashboard"/>
        <Route path="/dashboard/edit/:id" component={UserInfoDrawer}/>
      </Switch>

    </>
  );
}

export default MainWrapper;
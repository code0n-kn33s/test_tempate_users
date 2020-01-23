import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Routes from './RootRoutes'

import Header from './parts/Header'

import 'antd/dist/antd.less'
import '../assets/styles/main.sass'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="content">
          <div className="container">
            <Switch>
              <Redirect exact from="/" to="/dashboard" push/>
              {
                Routes.map((route, index) => (
                  <Route key={index} {...route} />
                ))
              }
            </Switch>
          </div>
        </div>
      </>
    )
  }
}

export default App;

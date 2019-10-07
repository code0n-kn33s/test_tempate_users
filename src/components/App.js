import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Routes from './RootRoutes'

import UserInfoDrawer from './pages/Main/UserInfoDrawer'
import Header from './parts/Header'
import Footer from './parts/Footer'

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
        <Footer />
      </>
    )
  }
}

export default App;

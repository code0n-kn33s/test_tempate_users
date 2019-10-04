import React, { Component } from 'react';

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../redux/store";
import App from "./App";

const supportsHistory = 'pushState' in window.history;

class Root extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter forceRefresh={!supportsHistory}>
          <Route component={ App } />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
Вопросы:
1) ./src/redux/middleware/promises.js
  Line 14:  Unexpected use of comma operator  no-sequences

2) где webpack в реакт ?
Для svg нужно заюзать это :
import React, { Component } from 'react'

import mySvg from './logo.svg'

class Header extends Component {

  render() {
    return (
        <div className='header'>
            <img src={mySvg} />
        </div>
    );
  }
};

export default Header
as well as

import Logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo fill="red" className="logo" width={50} height={50} />
      </div>
    );
  }
}
and minimum config looks like this:

{
  test: /\.svg$/,
  use: [
    {
      loader: "babel-loader"
    },
    {
      loader: "react-svg-loader",
      options: {
        jsx: true // true outputs JSX tags
      }
    }
  ]
}

3)
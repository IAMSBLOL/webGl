import React, { Component } from 'react';
import './App.module.scss';

import Test from './test'

class App extends Component {
  render() {
    return (
      <div  styleName='App'>
        123
        <div className='fucking'>12312312321</div>
        <Test/>
      </div>
    );
  }
}

export default App;

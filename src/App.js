import './App.css';

import React, { Component } from 'react'
import NavBar from './componennets/NavBar';
import News from './componennets/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './App.css';
import Additem from './components/Additem/Additem'
import Todoitem from './components/Todoitem/Todoitem'


export default class App extends Component {
  render() {
    return (
      <div>
        Test Page 

        <Additem />
        <Todoitem />

      </div>
    )
  }
}

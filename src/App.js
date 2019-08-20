import React, { Component } from 'react'
import './App.scss';
import Additem from './components/Additem/Additem'
import Todoitem from './components/Todoitem/Todoitem'


export default class App extends Component {

  state = {
    items :[
      {id: 1, name:'aaa', age:11},
      {id: 2, name:'bbb', age:22},
      {id: 3, name:'ccc', age:33}
    ]
  };
  deleteItem = (id ) => {
    const it = this.state.items.filter(item =>{
      return item.id !== id
      
    })
    this.setState({items:it})
    console.log( ` Id : ${id} is deleted `)

  }

  addItem = (item) =>{
    item.id=Math.random();
const it= this.state.items;
it.push(item);
this.setState({items:it})
console.log(`${item.name} Is Added`)
  }
  
  render() {
    return (
      <div className="container app">
  <h1 className="text-center">React ToDo App</h1>
        
        <Todoitem items={this.state.items} deleteItem={this.deleteItem}/>
        <Additem addItem={this.addItem} />

      </div>
    )
  }
}

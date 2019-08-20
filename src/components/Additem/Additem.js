import React, { Component } from 'react'
import './Additem.scss'

// Class Based Components
export default class Additem extends Component {
         
state = {
    name:'',
    age:''
}


handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}

handleSubmit = (e)  => {
    e.preventDefault();

    if(e.target.name.value === ''){
        return false
    }else{
        this.props.addItem(this.state);
        this.setState({
            name:'',
            age:''
        })
    }
    
// return false  ? e.target.name.value === '' 
// // eslint-disable-next-line no-unreachable
// : this.props.addItem(this.state); this.setState({name:'', age:''});
   
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="Your Name ..." id="name" onChange={this.handleChange} value={this.state.name}/>
  <input type="number" placeholder="Your Age ..." id="age" onChange={this.handleChange} value={this.state.age}/>
  <input type="submit" className="sub" value="Add"/></form>
                
</div>
        )

    }
}

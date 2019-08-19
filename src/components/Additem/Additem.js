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
    this.props.addItem(this.state);
    this.setState({
        name:'',
        age:''
    })
}


    render() {
        return (
            <div>
                <h2 className='style2'>Style Test</h2>
                <form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="firstname" id="name" onChange={this.handleChange} value={this.state.name}/>
  <input type="number" placeholder="Age" id="age" onChange={this.handleChange} value={this.state.age}/>
  <input type="submit" value="Add"/>
</form>
                
</div>
        )

    }
}

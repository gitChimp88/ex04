import React from 'react'
import Child from './Child'

export default class App extends React.Component {
	debugger
	constructor(){
		super()
		this.state = {
			value : "No text provided!"
		}
	}
	
	handleChange(e) {
		
		this.setState({[e.target.name]:e.target.value}, ()=>{
			console.log(this.state)
		})
	}
	
	render(){
		return (
			<div onChange={this.handleChange.bind(this)}>
			<input name="value"></input>
				
				<Child name = {this.state.value}/>
			</div>
		)
	}
}



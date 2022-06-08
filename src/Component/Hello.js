import React from 'react';

class Hello extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h1>Em yeu co</h1>
				<h1>{this.props.msg}</h1>
				<h2>{this.props.user.id}, {this.props.user.name}</h2>
			</div>
		);
	}
}

export default Hello;
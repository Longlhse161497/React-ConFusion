import React from 'react';

class Warning extends React.Component{
	constructor(){
		super();
		// this.display=this.dispaly.bind(this);
	}
	display=(msg)=>{
		alert(msg);
	}
	render(){
		return(
			<button onClick={()=>this.display("yeu co")}>click me</button>
		);
	}
}

export default Warning;
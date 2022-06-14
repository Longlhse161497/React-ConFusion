import React from 'react';
import Avatar from './Avatar';

function formDate(date){
	return date.toString();
};

function Comment(props){
	return(
		<div>
			<div>
				<Avatar user={props.author}/>
				<div>{props.author.name}</div>
			</div>
			<div>{props.text}</div>
			<div>{formDate(props.date)}</div>
		</div>
	);
};

export default Comment;
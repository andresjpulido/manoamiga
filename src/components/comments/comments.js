import React from "react";
import "./comments.css";

export default function Comments(props) {

	if (!props.data) return <div><br /></div>;

	let messages = props.data; 
	let messagesDiv = messages.map((item, index) => (
		<div className="comments" key={index}>
			<p className="comment">{item.comment}</p>
            
			<p className="author">{item.author}</p>
		</div>
	));

	return <div>{messagesDiv}</div>;
}

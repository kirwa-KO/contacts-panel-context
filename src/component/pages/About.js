import React from 'react';

export default function About (props) {
	return (
		<div>
			<h3>About us :</h3>
			<h5> { props.match.params.id } </h5>
			<h5> { props.match.params.name} </h5>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam autem nulla sint quis veritatis, dolorum doloribus voluptatem beatae ducimus temporibus!</p>
		</div>
	)
}



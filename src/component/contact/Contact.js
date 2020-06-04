import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import { Consumer } from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {

	state = {
		showContactInfo : true
	}

	showContact (myMessage) {
		console.log("Hi, " , myMessage);
		this.setState({
			showContactInfo : !this.state.showContactInfo
		})
	}

	onDeleteContactFromChild = () => {
		console.log("Salam Delete...!");
		this.props.onDeleteContactEvent();
	}

	onDeleteContact = (id, dispatch) => {
		axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
			 .then(res => dispatch({
				type: "DELETE_CONTACT",
				payload: id
			}))
			.catch(err => console.error(err));
	}

	render() {

		const { name, email, phone, id } = this.props.data;

		// return (
			// <div className="card text-left">
			//   <div className="card-body">
			// 	<h4 className="card-title"> 
			// 	{/* { name } <i onClick={ () => console.log('Salam') } className="fa fa-sort-down"></i> */}
			// 	{/* { name } <i onClick={ this.showContact } className="fa fa-sort-down"></i> */}
			// 	{ name } 
			// 	<i onClick={ this.showContact.bind(this, name) } className="fa fa-sort-down" style={{ cursor : 'pointer' }}></i>

			// 	<i className="fa fa-times" style={{ color : 'red', float : 'right', cursor : 'pointer' }} onClick={this.onDeleteContactFromChild}></i>

			// 	</h4>
			// 	<div className="card-text">
			// 		{(this.state.showContactInfo) ? (
			// 		<ul className="list-group">
			// 			<li className="list-group-item"> { email } </li>
			// 			<li className="list-group-item"> { phone } </li>
			// 		</ul>
			// 		) : null }

			// 	</div>
			//   </div>
			// </div>
		// );



		return (
			<Consumer>
				{ value => {
					const { dispatch } = value;
					return (
						<div className="card text-left">
							<div className="card-body">
								<h4 className="card-title"> 
								{/* { name } <i onClick={ () => console.log('Salam') } className="fa fa-sort-down"></i> */}
								{/* { name } <i onClick={ this.showContact } className="fa fa-sort-down"></i> */}
								{ name } 
								<i onClick={ this.showContact.bind(this, name) } className="fa fa-sort-down" style={{ cursor : 'pointer' }}></i>
								<Link to={`/contact/edit/${id}`}>
									<i className="fa fa-pencil" style={{ color : 'orange', marginLeft : '8px', float : 'right' }}></i>
								</Link>
								<i 	className="fa fa-times"
									style={{ color : 'red', float : 'right', cursor : 'pointer' }}
									onClick={this.onDeleteContact.bind(this, id, dispatch)}></i>
								
								</h4>
								<div className="card-text">
									{(this.state.showContactInfo) ? (
									<ul className="list-group">
										<li className="list-group-item"> { email } </li>
										<li className="list-group-item"> { phone } </li>
									</ul>
									) : null }
		
								</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Contact.defaultProps = {
	name : "default Name",
	phone : "00000",
	email : "default@mail.com"
}

Contact.propTypes = {
	// name : PropTypes.string.isRequired,
	// phone : PropTypes.string,
	// email : PropTypes.string
	data : PropTypes.object.isRequired,
	onDeleteContactEvent: PropTypes.func.isRequired
}

export default Contact;

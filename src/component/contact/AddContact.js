import React, { Component } from 'react';
import { Consumer } from '../context';
import TextinputGroup from '../helpers/TextInputGroup';
import axios from 'axios';

class	AddContact extends Component {

	state = {
		name : '',
		email: '',
		phone  : '',
		errors : {}
	}

	onChangeInput = (e) => {
		this.setState({ [e.target.name] : e.target.value });
	}

	onAddContact = (dispatch, size, e) => {
		e.preventDefault();

		const	{ name, email, phone } = this.state;

		if (name === '')
		{
			this.setState({ errors : { name : "name is Required...!" } });
			return ;
		}

		if (email === '')
		{
			this.setState({ errors : { email : "email is Required...!" } });
			return ;
		}

		if (phone === '')
		{
			this.setState({ errors : { phone : "phone number is Required...!" } });
			return ;
		}

		// dispatch({
		// 	type: "ADD_CONTACT",
		// 	payload : {
		// 		id : size + 1,
		// 		name : this.state.name,
		// 		email : this.state.email,
		// 		phone : this.state.phone
		// 	}
		// });

		const newConatct = {
							name : this.state.name,
							email : this.state.email,
							phone : this.state.phone
						}

		axios.post("https://jsonplaceholder.typicode.com/users", newConatct)
			.then(res => dispatch({
				type: "ADD_CONTACT",
				payload : newConatct
			}))
			.catch(err => console.error(err));

		



		this.setState({
			name: '',
			email: '',
			phone: '',
			errors : {}
		});
		this.props.history.push("/");
	}

	render () {
		const	{ name, email, phone, errors } = this.state;

		return (
			<Consumer>
				{
					value => {

						const { dispatch } = value;

						return (
						<form onSubmit={ this.onAddContact.bind(this, dispatch, value.contacts.length) }>
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Add Contact</h5>
									<div className="card-text">

										<TextinputGroup name="name"
														label="Name"
														type="text"
														value={ name }
														onChange={ this.onChangeInput }
														error={ errors.name }
														/>

										<TextinputGroup name="email"
														label="Email"
														type="email"
														value={ email }
														onChange={ this.onChangeInput }
														error={ errors.email }
														/>

										<TextinputGroup name="phone"
														label="Phone"
														type="text"
														value={ phone }
														onChange={ this.onChangeInput }
														error={ errors.phone }
														/>

										<button className="btn btn-success btn-block">Add Contact</button>
									</div>
								</div>
							</div>
						</form>
						)
					}
				}
			</Consumer>
		)

		// return (
		// 	<form onSubmit={ this.onAddContact }>
		// 		<div className="card">
		// 			<div className="card-body">
		// 				<h5 className="card-title">Add Contact</h5>
		// 				<div className="card-text">
		// 					<div className="form-group">
		// 						<label htmlFor="">Name</label>
		// 						<input	type="text"
		// 								className="form-control"
		// 								defaultValue={ name }
		// 								name="name"
		// 								onChange={ this.onChangeInput }
		// 						/>
		// 					</div>
		// 					<div className="form-group">
		// 						<label htmlFor="">Email</label>
		// 						<input	type="text"
		// 								className="form-control"
		// 								defaultValue={ email }
		// 								name="email"
		// 								onChange={ this.onChangeInput }
		// 						/>
		// 					</div>
		// 					<div className="form-group">
		// 						<label htmlFor="">Phone</label>
		// 						<input	type="text"
		// 								className="form-control"
		// 								defaultValue={ phone }
		// 								name="phone"
		// 								onChange={ this.onChangeInput }
		// 						/>
		// 					</div>
		// 					<button className="btn btn-success btn-block">Add Contact</button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</form>
		// )
	}
}

export default AddContact;

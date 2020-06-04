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

	componentDidMount () {
		const id = this.props.match.params.id;
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => this.setState({
				name : res.data.name,
				email: res.data.email,
				phone  : res.data.phone,
			}))
			.catch (err => console.log(err))

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

		const updateConatct = {
							name : this.state.name,
							email : this.state.email,
							phone : this.state.phone
						}

		const id = this.props.match.params.id;
		console.log(this.props.match.params)

		axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateConatct)
			.then(res => dispatch({
				type: "EDIT_CONTACT",
				payload : res.data
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
									<h5 className="card-title">Edit Contact</h5>
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

										<button className="btn btn-danger btn-block">Update Contact</button>
									</div>
								</div>
							</div>
						</form>
						)
					}
				}
			</Consumer>
		)

	}
}

export default AddContact;

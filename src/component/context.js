import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
		case 'DELETE_CONTACT':
			return {
				contacts: state.contacts.filter((contact) => contact.id !== action.payload)
			};
		case 'ADD_CONTACT':
			return {
				contacts: [action.payload, ...state.contacts]
			};

		case 'EDIT_CONTACT':
			return {
				contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
			};
		default:
			return state;
	}
}

export class Provider extends Component {

	state = {
		contacts : [
			{id :1, name : "kirwa takadi", phone : "0605306525", email : "kirwa@gmail.com"},
			{id :2, name : "Orocho chimaro", phone : "0605306526", email : "orocha@gmail.com"},
			{id :3, name : "naruto nakazaki", phone : "0605306527", email : "proton@gmail.com"},
		],
		dispatch: action => this.setState(state => reducer(state, action))
	}

	// componentWillMount () {
	// 	axios.get("https://jsonplaceholder.typicode.com/users")
	// 		 .then(res => this.setState({
	// 			 contacts : res.data
	// 		 }))
	// 		 .catch(err => console.error(err))
	// }

	// componentWillMount () {
	async componentDidMount ()  {
		try {
			const res = await axios.get("https://jsonplaceholder.typicode.com/users");
			this.setState({
				contacts : res.data
			});
		}
		catch (e) {
			console.error(e);
		}
	}

	render () {
		return (
			<Context.Provider value={ this.state }>
				{ this.props.children }
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer;

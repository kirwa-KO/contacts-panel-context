import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';


class Contacts extends Component {

	// state = {
	// 	contacts : [
	// 		{id :1, name : "kirwa takadi", phone : "0605306525", email : "kirwa@gmail.com"},
	// 		{id :2, name : "Orocho takadi", phone : "0605306526", email : "orocha@gmail.com"},
	// 		{id :3, name : "naruto takadi", phone : "0605306527", email : "proton@gmail.com"},
	// 	]
	// }

	deleteContact (id) {

		// console.log("are you plan to delete the contact id = ", id);
		const	{ contacts } = this.state;

		const	newContacts = contacts.filter((contact) => contact.id !== id);

		this.setState({
			contacts: newContacts
		});
	}

	render () {
		// const { contacts } = this.state;

		
		// return (
		// 	<div>
		// 		{contacts.map((contact) => (
		// 				<Contact key={contact.id}
		// 					// name={ contact.name }
		// 					// phone={ contact.phone }
		// 					// email={ contact.email }
		// 					data={contact}
		// 					onDeleteContactEvent={ this.deleteContact.bind(this, contact.id) }
		// 				/>
		// 			))}
		// 	</div>
		// );
		
		return (
			<Consumer>
				{ value => (
					<div>
						{value.contacts.map((contact) => (
								<Contact key={contact.id}
									// name={ contact.name }
									// phone={ contact.phone }
									// email={ contact.email }
									data={contact}
									onDeleteContactEvent={ this.deleteContact.bind(this, contact.id) }
								/>
							))}
					</div>
				) }
			</Consumer>
		);
	};
}

export default Contacts;

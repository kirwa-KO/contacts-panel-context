import React from 'react';
// import logo from './logo.svg';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// import Contact from './component/contact/Contact';
import Contacts from './component/contact/Contacts';
import NavBar from './component/navbar/NavBar';
import { Provider } from './component/context';
import AddContact from './component/contact/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/pages/About';
import PageNotFound from './component/pages/PageNotFound';
import EditContact from './component/contact/EditContact';


function App() {
	// let name = "kirwa takadi";
	// let num1 = 150;
	// let num2 = 23;
	return (
		<Provider>
			<Router>
				<div className="App">
					<NavBar title="Service Thala"/>
					{/* <label htmlFor="proton"> { name } </label>
					<p>{ num1 } + { num2 } = { num1 + num2 }</p>
					<br /> */}
					{/* <input type="text" name="kirwa" id="proton" /> */}
					{/* <Contact /> */}
					{/* <Contact name="kirwa takadi" email="kirwa@gmail.com" phone="0605306258" />
					<Contact name="Orochimaro chimaro" email="kirwa@gmail.com" phone="0605306364" />
					<Contact name="Naruto nakazaki" email="kirwa@gmail.com" phone="0605306859" /> */}
					{/* <AddContact />
					<Contacts /> */}
					<Switch>
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contact/add" component={AddContact} />
						<Route exact path="/contact/edit/:id" component={EditContact} />
						{/* <Route exact path="/about" component={About} /> */}
						<Route exact path="/about/:id/:name" component={About} />
						<Route component={ PageNotFound } />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;

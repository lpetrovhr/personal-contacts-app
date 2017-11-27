import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllContacts from 'containers/AllContacts';
import Favorites from 'containers/Favorites';
import Menu from 'components/Menu';
import NewContact from 'containers/NewContact';
import EditContact from 'containers/EditContact';

class Routing extends Component {
	render () {
		return (
			<section className="contacts">
				<Switch>
					<Route exact path="/" component={AllContacts} />
					<Route exact path="/favorites" component={Favorites} />
					<Route exact path="/contacts/new" component={NewContact} />
					<Route exact path="/contacts/edit/:id" component={EditContact} />
				</Switch>
			</section>
		);
	}
}


export default Routing;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ContactForm from 'components/ContactForm';
import { addContact } from '../../actions/contacts';

class NewContact extends Component {

	constructor() {
		super();
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(values) {
		const { dispatch, history } = this.props;
		dispatch(addContact(values));
		history.push('/');
	}

	render () {
		return (
			<ContactForm onSubmit={this.onFormSubmit} />
		);
	}
}

NewContact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(connect(state => ({
  contacts: state.contacts
}))(NewContact));

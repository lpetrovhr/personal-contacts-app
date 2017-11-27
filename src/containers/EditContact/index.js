import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ContactForm from 'components/ContactForm';
import { updateContact, removeContact } from '../../actions/contacts';
import Modal from 'react-modal';


class EditContact extends Component {

	constructor() {
		super();

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(values) {
		const { dispatch, history } = this.props;
		dispatch(updateContact(values));
		history.push('/');
	}

	render () {
		const { match: { params }, contacts } = this.props;
	    const contactId = params.id;

		const editContact = contacts.data.filter((contact) => contact.id == contactId);

		return (
			<ContactForm onSubmit={this.onFormSubmit} contact={editContact} isEdit={true} />
		);
	}
}

EditContact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(connect(state => ({
  contacts: state.contacts
}))(EditContact));

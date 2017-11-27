import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ContactCard from 'components/ContactCard';
import Search from 'components/Search';
import Menu from 'components/Menu';
import Modal from 'react-modal';
import { removeContact, searchContact ,toggleFavorite } from '../../actions/contacts';

class Favorites extends Component {

	constructor() {
		super();

		this.state = {
	      modalIsOpen: false,
	      deletionId: '',
	      isSearchData: false
	    };

	    this.openModal = this.openModal.bind(this);
	    this.confirmDelete = this.confirmDelete.bind(this);
	    this.closeModal = this.closeModal.bind(this);
		this.onContactRemove = this.onContactRemove.bind(this);
		this.onToggle = this.onToggle.bind(this);
		this.onSearchType = this.onSearchType.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true, deletionId: '', isSearchData: false });
	}

	confirmDelete() {
		const { dispatch } = this.props;
		console.log(this.state.deletionId);

		dispatch(removeContact(this.state.deletionId));

		this.setState({ modalIsOpen:false, deletionId: '' });
	}

	closeModal() {
		this.setState({ modalIsOpen: false, deletionId: '' });
	}

	onContactRemove(id) {
		this.setState({ modalIsOpen: true, deletionId: id });
	}

	onToggle(id) {
		const { dispatch } = this.props;
		dispatch(toggleFavorite(id));
	}

	onSearchType(event) {
		const { dispatch } = this.props;
		let searchValue = event.target.value;
		if (searchValue) {
			this.setState({ isSearchData: true })
			dispatch(searchContact(event.target.value));
		} else {
			this.setState({ isSearchData: false })
		}
	}

	renderContacCards(contacts) {
		if (!contacts[0]) {
			return this.state.isSearchData? <p>Your search doesn't match anything</p> : null;
		}
		return contacts.map((contact, key) => 
			<ContactCard 
				key={key}
				contact={contact}
				onRemove={() => this.onContactRemove(contact.id)} 
				onToggle={() => this.onToggle(contact.id)}
			/>
		);
	}

	render () {
		const { contacts } = this.props;
		const allContacts = contacts.data.filter(person =>  {
			if (person.favorite) {
				return person;
			}
		});

		console.log(allContacts);

		const searchData = contacts.searchData.filter(person =>  {
			if (person.favorite) {
				return person;
			}
		});

		return (
			<section className="container">
				<Menu />
				<div className="contacts--container">
					<Search onSearchType={this.onSearchType} />
					{this.state.isSearchData ? this.renderContacCards(searchData) : this.renderContacCards(allContacts)}
			        <Modal
			          isOpen={this.state.modalIsOpen}
			          onAfterOpen={this.afterOpenModal}
			          onRequestClose={this.closeModal}
			          className="modal--container"
			          overlayClassName="modal--container--overlay"
			          contentLabel="Delete Modal"
			        >
			          <p>Are you sure you want to delete this contact?</p>
			          <button className="button button--secondary" onClick={this.closeModal}>Cancel</button>
			          <button className="button button--primary" onClick={this.confirmDelete}>Delete</button>
			        </Modal>
			    </div>
			</section>
		);
	}
}

Favorites.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  contacts: PropTypes.object.isRequired,
  error: PropTypes.string
};

export default withRouter(connect(state => ({
	contacts: state.contacts
}))(Favorites));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

const ContactCard = ({ contact, key, onRemove, onToggle }) => (
		<article className="contact--card">
			<header className="contact--card--bar">
				<i onClick={() => { onToggle() }} className={contact.favorite ? 'fa fa-heart clickable' : 'fa fa-heart-o clickable'}></i>
				<Link 
					to={`/contacts/edit/${contact.id}`}
				>
					<i className="fa fa-pencil"></i>
				</Link>
				<a 
					href=""
					onClick={ e => {
					e.preventDefault()
					onRemove()
				}}>
					<i className="fa fa-trash-o"></i>
				</a>
			</header>
			<section className="contact--card--container">
				<img className="contact--card--container_image" src={require(`assets/images/profile.png`)} />
				<p className="contact--card--container_paragraph">
					{contact.firstName + ' ' + ' ' + contact.lastName}
				</p>
			</section>
		</article>
);

ContactCard.propTypes = {
	key: PropTypes.number,
	contact: PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};

export default withRouter(ContactCard);

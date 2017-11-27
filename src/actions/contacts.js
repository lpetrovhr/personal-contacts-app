import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT, SEARCH_CONTACT, TOGGLE_FAVORITE } from '../actionTypes';

export const addContact = contact => {
	contact.id = Math.floor(Date.now() / 100);
	return { type: ADD_CONTACT, data: contact };
}

export const removeContact = contactId => {
	return { type: REMOVE_CONTACT, data: contactId };
}

export const updateContact = contact => {
	return { type: UPDATE_CONTACT, data: contact };
}

export const searchContact = searchValue => {
	return { type: SEARCH_CONTACT, data: searchValue };
}

export const toggleFavorite = contactId => {
	return { type: TOGGLE_FAVORITE, data: contactId };
}

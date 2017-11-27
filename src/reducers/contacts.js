import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT, SEARCH_CONTACT, TOGGLE_FAVORITE } from '../actionTypes';

const initialState = {
	data: [],
	searchData: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return Object.assign({}, state, {
				data: [
					...state.data,
					action.data
				]
			});
		case REMOVE_CONTACT:
			return Object.assign({}, state, { 
				data: [
					...state.data.filter((person) => person.id !== action.data)
				]
			});
		case UPDATE_CONTACT:
			return Object.assign({}, state, {
				data: [
					...state.data.map((person) => person.id === action.data.id ? action.data : person)
				]
			});
		case SEARCH_CONTACT:
			return Object.assign({}, state, {
				searchData: [
					...state.data.filter((person) => {
						if (person.firstName.includes(action.data) || person.lastName.includes(action.data)) {
							return person;
						}
					})
				]
			});
		case TOGGLE_FAVORITE:
			return Object.assign({}, state, {
				data: state.data.map(person => {
					if(person.id === action.data) {
						console.log(person);
						return Object.assign({}, person, {
							favorite: !person.favorite
						})
					}
					return person;
				})
			});
		default:
			return state;
	}
}

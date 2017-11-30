import { List, Map } from 'immutable';
import { SET_ALL_PRODUCTS, SET_PRODUCT, GET_ALL_PRODUCTS } from '../helpers/actionConstants';

const initValue = new Map({
	fetching: false,
	error: {
		state: false,
		text: ""
	},
	data: new List(),
});

export default (state = initValue, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return state.set('fetching', true);
		case SET_ALL_PRODUCTS:

			return new Map({
				fetching: false,
				data: new List(action.products),
			});
		case SET_PRODUCT:
			return state.push(action.product);

		default:
			return state;
	}
}


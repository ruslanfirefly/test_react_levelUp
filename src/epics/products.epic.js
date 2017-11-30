import { GET_ALL_PRODUCTS } from '../helpers/actionConstants';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/observable/of';
import   {Observable}  from 'rxjs';
import {setAllProducts, setProduct} from "../actions/products.action"

export const getAllProductsEpic = action$ => {
	console.log(action$);
	return action$.ofType(GET_ALL_PRODUCTS)
		.mergeMap(() => {
			return ajax.getJSON('http://localhost:3001/products')
				.delay(5000)
				.map(resp => setAllProducts(resp))
				.catch(el => {
					console.log(el);
					return Observable.Observable.of({type: "rest"})
				});
		});

};
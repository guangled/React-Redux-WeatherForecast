/*
* @Author: guangled
* @Date:   2017-03-21 16:37:05
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-21 21:40:20
*/
import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
	// console.log('Action received', action);
	switch (action.type) {
		case FETCH_WEATHER: 
			// We only update state by calling setState().
			// We can't manipulate (mutate) the state directly as follows:

			// return state.push(action.payload.data);

			// We should return a new instance of state.
			// concat() doesn't change the existing array but
			// creates a new array that contains all the old stuff
			// and the new stuff.

			// return state.concat([action.payload.data]);

			// this line is the same as the last but in ES6 syntax
			return [ action.payload.data, ...state ]; // [ city, city, city, ... ]
	}
	return state;
}
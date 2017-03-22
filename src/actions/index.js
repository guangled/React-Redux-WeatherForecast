/*
* @Author: guangled
* @Date:   2017-03-20 20:07:41
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-21 21:24:26
*/
import axios from 'axios';

const API_KEY = '7492638f68afde233f59adda7b56951d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		// We return the promise as a payload
		payload: request
	};
}
import axios from 'axios';
import { params_interface } from '../util/interfaces';

const BASE_URL = 'https://dummyjson.com';

const AxiosInstance = axios.create({
	baseURL: BASE_URL,
});

export function GetUsers() {
	return AxiosInstance({
		method: 'get',
		url: '/users',
	});
}

export function SearchUsers(params: params_interface) {
	return AxiosInstance({
		method: 'get',
		url: '/users/search',
		params: params,
	});
}

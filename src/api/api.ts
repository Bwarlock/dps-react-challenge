import axios from 'axios';

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

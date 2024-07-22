import { useDispatch } from 'react-redux';
import { GetUsers, SearchUsers } from './api';
import { AppDispatch } from '../store/store';
import {
	storeCities,
	storeLoading,
	storeSelected_city,
	storeUsers,
} from '../store/userSlice';
import {
	city_select_interface,
	params_interface,
	user_raw_interface,
} from '../util/interfaces';

export const useGetData = () => {
	const dispatch = useDispatch<AppDispatch>();
	async function getUsers(params?: params_interface) {
		dispatch(storeLoading(true));
		try {
			let res;
			if (params) {
				res = await SearchUsers(params);
			} else {
				res = await GetUsers();
			}

			if (res?.data?.users?.length) {
				const cities: Map<string, city_select_interface> = new Map();

				const data = res?.data?.users.map(
					(user: user_raw_interface) => {
						cities.set(user?.address?.city, {
							value: user?.address?.city,
							label: user?.address?.city,
						});
						return {
							key: user?.id,
							city: user?.address?.city,
							birthdate: user?.birthDate,
							name:
								user?.firstName +
								(user?.lastName ? ' ' + user?.lastName : ''),
						};
					}
				);
				dispatch(storeUsers(data));
				dispatch(storeCities(Array.from(cities.values())));
				dispatch(storeSelected_city(''));
			} else {
				dispatch(storeUsers([]));
				dispatch(storeCities([]));
				dispatch(storeSelected_city(''));
			}
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(storeLoading(false));
		}
	}
	return { getUsers };
};

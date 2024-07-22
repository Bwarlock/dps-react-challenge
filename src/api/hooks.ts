import { useDispatch } from 'react-redux';
import { GetUsers } from './api';
import { AppDispatch } from '../store/store';
import { storeCities, storeLoading, storeUsers } from '../store/userSlice';
import { city_select_interface, user_raw_interface } from '../util/interfaces';

export const useGetData = () => {
	const dispatch = useDispatch<AppDispatch>();
	function getUsers() {
		dispatch(storeLoading(true));
		GetUsers()
			.then((res) => {
				console.log(res?.data);
				if (res?.data?.users?.length) {
					const cities: Map<string, city_select_interface> =
						new Map();

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
									(user?.lastName
										? ' ' + user?.lastName
										: ''),
							};
						}
					);
					dispatch(storeUsers(data));
					dispatch(storeCities(Array.from(cities.values())));
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				dispatch(storeLoading(false));
			});
	}
	return { getUsers };
};

import { useDispatch } from 'react-redux';
import { GetUsers } from './api';
import { AppDispatch } from '../store/store';
import { storeLoading, storeUsers } from '../store/userSlice';
import { user_interface } from '../util/interfaces';

export const useGetData = () => {
	const dispatch = useDispatch<AppDispatch>();
	function getUsers() {
		dispatch(storeLoading(true));
		GetUsers()
			.then((res) => {
				console.log(res?.data);
				if (res?.data?.users?.length) {
					const data = res?.data?.users.map(
						(user: user_interface) => {
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
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				storeLoading(false);
			});
	}
	return { getUsers };
};

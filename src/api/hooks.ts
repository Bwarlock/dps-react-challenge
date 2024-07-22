import { useDispatch } from 'react-redux';
import { GetUsers } from './api';
import { AppDispatch } from '../store/store';
import { storeLoading } from '../store/userSlice';

export const useGetData = () => {
	const dispatch = useDispatch<AppDispatch>();
	function getUsers() {
		dispatch(storeLoading(true));
		GetUsers()
			.then((res) => {
				console.log(res?.data);
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

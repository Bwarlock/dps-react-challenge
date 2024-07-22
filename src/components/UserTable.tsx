import { useEffect, useMemo } from 'react';
import { useGetData } from '../api/hooks';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
	user_slice_interface,
	user_transformed_interface,
} from '../util/interfaces';
import { storeOldest_in_city } from '../store/userSlice';

const userTableColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		width: 200,
		// align: 'center',
	},
	{
		title: 'City',
		dataIndex: 'city',
		key: 'city',
		width: 200,
		// align: 'center',
	},
	{
		title: 'Birthday',
		dataIndex: 'birthdate',
		key: 'birthdate',
		width: 200,
		// align: 'center',
	},
];

function UserTable() {
	const { getUsers } = useGetData();
	const dispatch = useDispatch();
	const {
		users: defaultUsers,
		loading,
		selected_city,
		oldest_in_city,
		highlight_oldest_in_city,
	} = useSelector((state: RootState) => state.users);
	const users = useMemo(() => {
		return selected_city
			? defaultUsers.filter((user) => user.city === selected_city)
			: defaultUsers;
	}, [defaultUsers, selected_city]);

	useEffect(() => {
		if (highlight_oldest_in_city) {
			const oldest: user_slice_interface['oldest_in_city'] = {};
			users.forEach((user) => {
				if (oldest[user.city]) {
					if (
						new Date(oldest[user.city]) > new Date(user.birthdate)
					) {
						oldest[user.city] = user.birthdate;
					}
				} else {
					oldest[user.city] = user.birthdate;
				}
			});
			dispatch(storeOldest_in_city(oldest));
		} else {
			dispatch(storeOldest_in_city({}));
		}
	}, [users, highlight_oldest_in_city]);

	const rowClassName = (record: user_transformed_interface) => {
		return oldest_in_city[record.city] == record.birthdate
			? 'highlight'
			: '';
	};

	// useEffect(() => {
	// 	getUsers();
	// }, []);
	return (
		<Table
			loading={loading}
			className="user-table"
			size="middle"
			columns={userTableColumns}
			dataSource={users}
			pagination={false}
			rowClassName={rowClassName}
		/>
	);
}

export default UserTable;

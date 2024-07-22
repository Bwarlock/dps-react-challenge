import { useEffect, useMemo } from 'react';
import { useGetData } from '../api/hooks';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

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
	const {
		users: defaultUsers,
		loading,
		selected_city,
	} = useSelector((state: RootState) => state.users);
	const users = useMemo(() => {
		return selected_city
			? defaultUsers.filter((user) => user.city === selected_city)
			: defaultUsers;
	}, [defaultUsers, selected_city]);

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<Table
			loading={loading}
			className="user-table"
			size="middle"
			columns={userTableColumns}
			dataSource={users}
			pagination={false}
		/>
	);
}

export default UserTable;

import { useEffect } from 'react';
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
	const { users } = useSelector((state: RootState) => state.users);

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<Table
			className="user-table"
			size="middle"
			columns={userTableColumns}
			dataSource={users}
			pagination={false}
		/>
	);
}

export default UserTable;

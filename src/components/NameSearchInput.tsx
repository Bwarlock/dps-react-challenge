import { Input } from 'antd';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGetData } from '../api/hooks';

function NameSearchInput() {
	const [value, setValue] = useState('');
	const { getUsers } = useGetData();

	useEffect(() => {
		const handler: ReturnType<typeof setTimeout> = setTimeout(() => {
			getUsers({ q: value });
		}, 1000); // 1000ms (1 second) timeout

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	const onNameSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<Input
			style={{
				border: '1px solid lightgray',
				cursor: 'unset',
			}}
			onChange={onNameSearch}
		/>
	);
}

export default NameSearchInput;

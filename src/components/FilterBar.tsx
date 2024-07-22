import { Checkbox, Input, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { storeSelected_city } from '../store/userSlice';
import { city_select_interface } from '../util/interfaces';

function FilterBar() {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	const { cities } = useSelector((state: RootState) => state.users);

	const onHighlightChecked = (e: CheckboxChangeEvent) => {
		console.log(e.target.checked);
	};
	const onCitySelect = (e: city_select_interface['value']) => {
		dispatch(storeSelected_city(e));
	};

	const onNameSearch = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				alignItems: 'end',
				width: '100%',
				gap: '0.5rem',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '0.5rem',
				}}
			>
				<div
					style={{
						textAlign: 'start',
					}}
				>
					<div>Name</div>
					<Input
						style={{
							border: '1px solid lightgray',
							cursor: 'unset',
						}}
						onChange={onNameSearch}
					/>
				</div>
				<div
					style={{
						textAlign: 'start',
					}}
				>
					<div>City</div>
					<Select
						allowClear={true}
						style={{ width: 140 }}
						onChange={onCitySelect}
						options={cities}
					/>
				</div>
			</div>
			<Checkbox
				style={{
					flexDirection: 'row-reverse',
					width: 160,
				}}
				className="highlight-city-checkbox"
				checked={checked}
				onChange={onHighlightChecked}
			>
				Highlight Oldest Per City
			</Checkbox>
		</div>
	);
}

export default FilterBar;

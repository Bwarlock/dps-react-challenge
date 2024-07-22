import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { storeSelected_city } from '../store/userSlice';
import { city_select_interface } from '../util/interfaces';

function CitySelect() {
	const dispatch = useDispatch();
	const { cities, selected_city } = useSelector(
		(state: RootState) => state.users
	);

	const onCitySelect = (e: city_select_interface['value']) => {
		dispatch(storeSelected_city(e));
	};
	return (
		<Select
			value={selected_city}
			allowClear={true}
			style={{ width: 140 }}
			onChange={onCitySelect}
			options={cities}
		/>
	);
}

export default CitySelect;

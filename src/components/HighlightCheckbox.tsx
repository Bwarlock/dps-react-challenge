import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { storeHighlight_oldest_in_city } from '../store/userSlice';
import { RootState } from '../store/store';

function HighlightCheckbox() {
	const dispatch = useDispatch();
	const { highlight_oldest_in_city } = useSelector(
		(state: RootState) => state.users
	);

	const onHighlightChecked = (e: CheckboxChangeEvent) => {
		dispatch(storeHighlight_oldest_in_city(e.target.checked));
	};
	return (
		<Checkbox
			style={{
				flexDirection: 'row-reverse',
				width: 160,
			}}
			className="highlight-city-checkbox"
			checked={highlight_oldest_in_city}
			onChange={onHighlightChecked}
		>
			Highlight Oldest Per City
		</Checkbox>
	);
}

export default HighlightCheckbox;

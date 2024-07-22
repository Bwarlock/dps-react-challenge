import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useDispatch, useSelector } from 'react-redux';

function HighlightCheckbox() {
	const dispatch = useDispatch();
	const onHighlightChecked = (e: CheckboxChangeEvent) => {
		console.log(e.target.checked);
	};
	return (
		<Checkbox
			style={{
				flexDirection: 'row-reverse',
				width: 160,
			}}
			className="highlight-city-checkbox"
			checked={false}
			onChange={onHighlightChecked}
		>
			Highlight Oldest Per City
		</Checkbox>
	);
}

export default HighlightCheckbox;

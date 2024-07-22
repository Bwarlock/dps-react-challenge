import CitySelect from './CitySelect';
import HighlightCheckbox from './HighlightCheckbox';
import NameSearchInput from './NameSearchInput';

function FilterBar() {
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
					<NameSearchInput />
				</div>
				<div
					style={{
						textAlign: 'start',
					}}
				>
					<div>City</div>
					<CitySelect />
				</div>
			</div>
			<HighlightCheckbox />
		</div>
	);
}

export default FilterBar;

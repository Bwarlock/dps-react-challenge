export interface params_interface {}

export interface user_raw_interface {
	id: number;
	address: { city: string };
	birthDate: string;
	firstName: string;
	lastName: string;
}

export interface user_transformed_interface {
	key: number;
	city: string;
	birthdate: string;
	name: string;
}

export interface city_select_interface {
	value: string;
	label: string;
}

export interface user_slice_interface {
	users: user_transformed_interface[];
	cities: city_select_interface[];
	selected_city: city_select_interface['value'];
	loading: boolean;
}

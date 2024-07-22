import { createSlice } from '@reduxjs/toolkit';
import { user_slice_interface } from '../util/interfaces';

const initialValue: user_slice_interface = {
	users: [],
	cities: [],
	selected_city: '',
	loading: false,
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState: initialValue,
	reducers: {
		storeUsers: (state, action) => {
			state.users = action.payload;
		},
		storeCities: (state, action) => {
			state.cities = action.payload;
		},
		storeSelected_city: (state, action) => {
			state.selected_city = action.payload;
		},
		storeLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { storeUsers, storeCities, storeSelected_city, storeLoading } =
	userSlice.actions;
export default userSlice.reducer;

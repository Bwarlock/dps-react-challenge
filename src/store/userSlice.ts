import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
	users: [],
	cities: [],
	selected_city: '',
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
	},
});

export const { storeUsers, storeCities, storeSelected_city } =
	userSlice.actions;
export default userSlice.reducer;

import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LocalStorageKey, REDUX_ACTION } from "../../constants/key_local"
import { IUserInformation } from "../../interfaces/author-interface";

let initState: IUserInformation = {
	id: "",
	email: "",
	fullname: "",
	phone: "",
	avatar: "",
	gender: "",
	role: "",
	numberShop: 0,
};

if (typeof window !== 'undefined') {
    initState = JSON.parse(localStorage.getItem(LocalStorageKey.USER_INFO));
}

const userReducer = createSlice({
	name: REDUX_ACTION.USER,
	initialState: initState,
	reducers: {
		updateUser: (state: any, action: PayloadAction<IUserInformation>) => {
			state = action.payload
		}
	}
})

export const {
	updateUser
} = userReducer.actions;

export default userReducer.reducer;
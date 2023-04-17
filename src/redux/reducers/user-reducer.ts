import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { REDUX_ACTION } from "../../constants/key_local"
import { IUserInformation } from "../../interfaces/author-interface";

const initState: IUserInformation = {
	id: "",
	email: "",
	fullname: "",
	phone: "",
	avatar: "",
	gender: "",
	role: "",
	numberShop: 0,
};

const userReducer = createSlice({
	name: REDUX_ACTION.TEST,
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
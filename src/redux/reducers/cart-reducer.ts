import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LocalStorageKey, REDUX_ACTION } from "../../constants/key_local"
import { IUserInformation } from "../../interfaces/author-interface";
import { ICartInformation, ICartProduct } from "../../interfaces/product-interface";

let initState: ICartInformation = {
	cartList: [],
};


if (typeof window !== 'undefined') {
    initState.cartList = JSON.parse(localStorage.getItem(LocalStorageKey.CART) ?? "[]");
}

const cartReducer = createSlice({
	name: REDUX_ACTION.CART,
	initialState: initState,
	reducers: {
		updateCart: (state: any, action: PayloadAction<ICartProduct[]>) => {
			state.cartList = [...action.payload]
		}
	}
})

export const {
	updateCart
} = cartReducer.actions;

export default cartReducer.reducer;
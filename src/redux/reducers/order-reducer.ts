import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LocalStorageKey, REDUX_ACTION } from "../../constants/key_local"
import { IOrder, IOrderListInformation, IOrderProduct } from "../../interfaces/order-interface";

let initState: IOrderListInformation = {
	orderList: [],
};


if (typeof window !== 'undefined') {
    initState.orderList = JSON.parse(localStorage.getItem(LocalStorageKey.ORDER_LIST) ?? "[]");
}

const orderReducer = createSlice({
	name: REDUX_ACTION.ORDER_LIST,
	initialState: initState,
	reducers: {
		updateOrderList: (state: any, action: PayloadAction<IOrder[]>) => {
			state.orderList = action.payload;
		}
	}
})

export const {
	updateOrderList
} = orderReducer.actions;

export default orderReducer.reducer;
import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { REDUX_ACTION } from "../../constants/key_local"

interface IInitialState {
	test: string,
}

const initState: IInitialState = {
	test: "",
};

const commonReducer = createSlice({
	name: REDUX_ACTION.TEST,
	initialState: initState,
	reducers: {
		testReducer: (state: any, action: PayloadAction<string>) => {
			state.test = action.payload
		}
	}
})

export const {
	testReducer
} = commonReducer.actions;

export default commonReducer.reducer;
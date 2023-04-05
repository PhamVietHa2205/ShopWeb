import { combineReducers, configureStore } from '@reduxjs/toolkit'
import commonReducer from './reducers/common-reducer';

export const store = configureStore({
	reducer: {
		common: commonReducer
	}
});
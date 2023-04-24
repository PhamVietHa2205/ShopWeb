import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user-reducer';
import cartReducer from './reducers/cart-reducer';

export const store = configureStore({
	reducer: {
		userInfo: userReducer,
		cart: cartReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
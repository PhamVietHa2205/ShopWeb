import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user-reducer';
import cartReducer from './reducers/cart-reducer';
import orderReducer from './reducers/order-reducer';

export const store = configureStore({
	reducer: {
		userInfo: userReducer,
		cart: cartReducer,
		order: orderReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
import { configureStore } from '@reduxjs/toolkit';

import cart from './cart/cartSlice';
import user from './user/userSlice';


export const store = configureStore({
  reducer: {
    cart,
	user
  },
});


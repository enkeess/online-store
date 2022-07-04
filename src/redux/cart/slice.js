import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItem, CartSliceState } from './types';


const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const calcTotalCount = (items) => {
	return items.reduce((sum, obj) => obj.count + sum, 0);
}

const initialState = {
	items: [],
	totalCount: 0,
    totalPrice: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

	  state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    decItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
		
        findItem.count--;
		
		if(findItem.count == 0) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
		}
      }

      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalCount = calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearAll(state) {
      state.items = [];
      state.totalPrice = 0;
	  state.totalCount = 0;
    },
  },
});

export const { incItem, removeItem, decItem, clearAll } = cartSlice.actions;

export default cartSlice.reducer;

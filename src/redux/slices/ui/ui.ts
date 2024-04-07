import { createSlice } from '@reduxjs/toolkit';

type InitialState={
  showCart : boolean
}
const initialState :InitialState = {
  showCart: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    }
  },
})

export default uiSlice.reducer
export const { showCart, hideCart } = uiSlice.actions;


export const isCartInfo=(state: { showCart:InitialState }) =>
  state.showCart;
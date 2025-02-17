// modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isProductOpen: false,
    product: null,
  },
  reducers: {
    openProductModal: (state, action) => {
      state.isProductOpen = true; 
      state.product = action.payload;
    },
    closeProductModal: (state) => {
      state.isProductOpen = false;
      state.product = null;
    },
  },
});

export const { openProductModal, closeProductModal } = modalSlice.actions;
export default modalSlice.reducer;

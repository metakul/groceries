import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from './initialData';
import {  ItemState } from '../../../interfaces/interface';
import {  ReactNode } from 'react';


const initialState: ItemState = {
  itemData: products,
  map: function (): ReactNode {
    throw new Error('Function not implemented.');
  }
};
const itemCollectionSlice = createSlice({
  name: 'itemCollection/fetch',
  initialState,
  reducers: {
    setLoadedItems: (state, action: PayloadAction<{ itemInfo: ItemState }>) => {
      const newItems = action.payload.itemInfo.itemData;
      state.itemData = [...state.itemData, ...newItems];
    },
  },
});

export const { setLoadedItems } = itemCollectionSlice.actions;

export default itemCollectionSlice.reducer;

export const selectedTopItems = (state: { allData: ItemState }) =>
  state.allData;

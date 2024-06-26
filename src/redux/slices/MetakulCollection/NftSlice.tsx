import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nftData } from './initialData';
import { NFTCollectionState } from '../../../interfaces/interface';

const initialState: NFTCollectionState = {
  nfts: nftData,
};
const nftCollectionSlice = createSlice({
  name: 'nftCollection',
  initialState,
  reducers: {
    setLoadedNfts: (state, action: PayloadAction<{ nfts: unknown[] }>) => {
      state.nfts = action.payload.nfts;
    },
  },
});

export const { setLoadedNfts } = nftCollectionSlice.actions;

export default nftCollectionSlice.reducer;

export const selectNftCollection = (state: { nftCollection: NFTCollectionState }) =>
  state.nftCollection;

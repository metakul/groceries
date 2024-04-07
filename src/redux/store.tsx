import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import NftCollectionReducer from "./slices/MetakulCollection/NftSlice"
import itemCollectionReducer from "./slices/Blogs/itemCollectionSlice"
import { useDispatch } from "react-redux";
import logger from 'redux-logger'
import cartSlice from './slices/Product/productSlice';
import ui from "./slices/ui/ui";
const store = configureStore({
  reducer: {
    auth:authReducer,
    nftCollection:NftCollectionReducer,
    blogsCollection:itemCollectionReducer,
    cartInfo:cartSlice,
    uiSlice:ui
  },
  middleware:getDefaultMiddlerware =>
    getDefaultMiddlerware().concat(logger),
    devTools:true
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;

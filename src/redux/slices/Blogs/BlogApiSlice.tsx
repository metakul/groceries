// authActions.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoadedItems } from './itemCollectionSlice';
import { ApiError, ItemState } from '../../../interfaces/interface';
import { ApiEndpoint } from '../../../DataTypes/enums';
import request from '../../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../../interfaces/interface';
import { FetchBlogData } from '../../../interfaces/interface';
export const fetchBlogApiSlice = createAsyncThunk(
  'blogCollection',
  // eslint-disable-next-line no-empty-pattern
  async ({ userType}:FetchBlogData , { rejectWithValue, dispatch }) => {
    try {
      console.log("user",userType)
      const response = await request({
        url: ApiEndpoint.GETBLOG.url,
        method: ApiEndpoint.GETBLOG.method,
        headers: ApiEndpoint.GETBLOG.headers
      })
      console.log(response)
      const blogs:ItemState = response.data;

      dispatch(setLoadedItems({itemInfo:blogs} ));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Blogs Fetched SuccessFully',
        data: response.data,
      };
  
      return apiSuccess;

    } catch (error) {
      const castedError =error as ApiError
      console.error('Error Fetching Blogs:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);

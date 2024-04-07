//pages interface
import { AxiosRequestConfig } from "axios"
import { ProductItem } from "../utils/types";
export interface Layoutprops {
}

export interface HomePageProps {
  pageTitle: string;
  pageDescription:string;
}

//tab title

export interface ProtectedPageProps {
  pageTitle: string;
  pageDescription:string
}

//login form state
export interface LoginData {
  email: string;
  password: string;
}

export interface CollectionInfo {
  collectionAddress:string
}

//logged in state
export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
  userType: string | null;
}

// api request
export interface RequestOptions {
  method: AxiosRequestConfig['method'];
  url: string;
  data?: unknown; // Allow any data type initially  // $MAJOR
  headers?: AxiosRequestConfig['headers'];
}

// api response success
export interface ApiSuccess {
  statusCode?: number;
  message: string;
  data:object
}

// api response error
export interface ApiError {
  statusCode?: number;
  error: string;
}

//custom error
export interface CustomError {
  error: string;
}



///Nft Page

export interface NFTCollectionState {
  nfts: unknown[];
}
export type ItemState= {
  map(arg0: (product: ProductItem, i: import("react").Key | null | undefined) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  itemData: ProductItem[]
}

export interface BalanceItem {
  metadata?: {
    name: string;
    id: string;
    image: string;
  };
  historyLink?: string;
}


//interfaces for post
export interface Ipost  {
  id?: string;
  title: string;
  description: string;
  image:string;
  author:string;
  categories: string[];
  price?: string;
}

export interface FetchBlogData{
  userType:string
}
import { RequestOptions } from "../interfaces/interface";
// enums.ts
export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
  RANDOM = 'random',
}

export enum Tabs {
  tabTitle1="Home",
  tabTitle2="BTC",
  tabTitle3="Wallet",
  tabTitle4="PROFILE"
}
export enum Pages {
  HOME = '/',
  DASHBOARD = '/dashboard/app'
}

export enum HomePageInfo{
  pageTitle="HomePage",
  pageDescription="This is home page",
  
}
export enum ProtectedPageInfo{
  pageTitle="Dashboard",
  pageDescription="This is Protected page",
}

// define endpoints here
  export const ApiEndpoint: Record<string, RequestOptions> = {
    LOGIN: { url: 'https://smart-wallet-us83.onrender.com/auth/user/login', method: 'POST', headers: { 'Content-Type': 'application/json'}},
    GETBLOG: { url: 'http://localhost:8000/post', method: 'GET', headers: { 'Content-Type': 'application/json'}},
  };
  
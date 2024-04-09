import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import ProtectedPage from "./pages/ProtecTedPages/Welcome";
import { Pages } from "./DataTypes/enums";
import { selectToken } from "./redux/slices/authSlice";
import DashboardOutlet from "./layout/DashboardLayout";
import { ProtectedPageInfo, HomePageInfo } from "./DataTypes/enums";
import MintPage from "./pages/Web3Pages/MintPage";
import Career from "./pages/CareerPage";
import EarnPage from "./pages/EarnPage";
import CreateNft from "./pages/CreateNftPage";
const Router: React.FC = () => {
  const token = useSelector(selectToken);

  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardOutlet />,
      children: [
        {
          path: Pages.HOME,
          element: token ? <Navigate to={`${Pages.DASHBOARD}`} /> : <HomePage pageTitle={HomePageInfo.pageTitle} pageDescription={HomePageInfo.pageDescription} />,
        },
        {
          path: Pages.MINT,
          element: <MintPage/>,
        },
        {
          path: Pages.CAREER,
          element: <Career/>,
        },
        {
          path: Pages.EARN,
          element: <EarnPage/>,
        },
        {
          path: Pages.CREATE_NFT,
          element: <CreateNft/>,
        },
        {
          path: Pages.DASHBOARD,
          element: token ? <ProtectedPage pageTitle={ProtectedPageInfo.pageTitle} pageDescription={ProtectedPageInfo.pageDescription}/> : <Navigate to={Pages.HOME} />,
        },
      ],
    },
    { path: "*", element: <Navigate to={Pages.HOME} /> },
  ]);

  return routes;
};

export default Router;

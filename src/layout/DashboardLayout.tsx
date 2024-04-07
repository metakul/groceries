import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

import navConfig from "./navConfig";
const APP_BAR_MOBILE = 8;
// const APP_BAR_DESKTOP = 92;
import Header from "./TopBar";
import MiniDrawer from "./Navigation/index"
// import { useSelector } from "react-redux";
// import CartPanel from "../Components/Cart";
// import { isCartInfo } from "../redux/slices/ui/ui";
export default function DashboardLayout() {

  const isNonMobile = useMediaQuery("(min-width: 680px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBarState = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  // const {showCart} = useSelector(isCartInfo);

  // console.log(showCart)
  return (
    <Box >
      <Header
        setIsSidebarOpen={handleSideBarState}
      />
      <MiniDrawer isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={handleSideBarState} navConfig={navConfig} />
      {/* {showCart && */}
       {/* <CartPanel /> */}
      {/* // } */}
      <Box component="main" sx={{
        flexGrow: 1,
        mt: APP_BAR_MOBILE,
        ml: isNonMobile ? 4 : 0
      }}>
        <Outlet />
      </Box>

    </Box>
  );
}

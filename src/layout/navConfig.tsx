import {
  HomeOutlined,
  ShoppingCartOutlined,
  ReceiptLongOutlined,
  PublicOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  PieChartOutlined,
  FoodBankOutlined
} from "@mui/icons-material";

export const navConfig = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    to: "",
  },
  {
    text: "Shop By Category",
    icon: null,
    to: "",
  },
  {
    text: "Dairy And Breakfast",
    icon: <TodayOutlined />,
    to: "dairy",
  },
  {
    text: "Munchies",
    icon: <ShoppingCartOutlined />,
    to: "Munchies",
  },
  {
    text: "Cleaning Essentials",
    icon: <PieChartOutlined />,
    to: "cleaning Esentials",
  },
  {
    text: "Atta, Rice & Dal",
    icon: <FoodBankOutlined/>,
    to: "atta_rice_dal",
  },
  {
    text: "Personal Wellness",
    icon: <ReceiptLongOutlined />,
    to: "personalWellness",
  },

  {
    text: "Shop by Store",
    icon:null,
    to: "",
  },
  {
    text: "Toy Store",
    icon: <AdminPanelSettingsOutlined />,
    to: "toyStore",
  },
  {
    text: "KYC",
    icon: <PublicOutlined />,
    to: "kyc",
  },
  {
    text: "Career",
    icon: <CalendarMonthOutlined />,
    to: "Career",
  },
  
];

export default navConfig;
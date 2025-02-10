import {
  CustIcon,
  DashIcon,
  DishIcon,
  DotIcon,
  EarthIcon,
  ManageIcon,
  OrderIcon,
  RestIcon,
  SelIcon,
  WalletIcon,
} from "./Icon";

export const languageOptions = [
  { code: "en", label: "English", flagSrc: <EarthIcon /> },
  { code: "gr", label: "German", flagSrc: "/assets/png/german.jpg" },
  { code: "it", label: "Italian", flagSrc: "/assets/png/italian.jpg" },
  { code: "sp", label: "Spanish", flagSrc: "/assets/png/spanish.jpg" },
  { code: "ru", label: "Russian", flagSrc: "/assets/png/Russian.jpg" },
];
export const boardData = [
  {
    title: "325.7K",
    subtitle: "Total Revenue",
    text: "10% Increase",
    class: "",
  },
  {
    title: "2.6K",
    subtitle: "New Orders",
    text: "50% Increase",
    class: "",
  },
  {
    title: "12.6K",
    subtitle: "Received Orders",
    text: "34% Increase",
    class: "",
  },
  {
    title: "476",
    subtitle: "Reviews",
    text: "5% Decrease",
    class: "text-[#EF4444]",
  },
  {
    title: "865",
    subtitle: "New Reach",
    text: "48% Increase",
    class: "",
  },
  {
    title: "9.2K",
    subtitle: "Successful Orders",
    text: "8% Decrease",
    class: "text-[#EF4444]",
  },
];

export const arrowData = [
  {
    icon: <DashIcon />,
    class: "hidden",
    title: "Dashboard",
  },
  {
    icon: <ManageIcon />,
    class: "hidden",
    title: "Manage",
  },
  {
    icon: <OrderIcon />,
    title: "Orders",
    // phara: [{ text: "Orders List" }, { text: "Order Details" }],
    text: "order list",
    text: "order Details",
  },
  {
    icon: <CustIcon />,
    title: "Customers",
    // phara: [{ text: "Orders List" }, { text: "Order Details" }],
    text: "Customers List",
    text: "Customer Details",
    text: "Add Customer",
    text: "Edit Customer",
  },
  {
    icon: <RestIcon />,
    title: "Restaurants",
    // phara: [{ text: "Orders List" }, { text: "Order Details" }],
    text: "Restaurants List",
    text: "Restaurant Details",
    text: "Add Restaurant",
    text: "Edit Restaurant",
  },
  {
    icon: <DishIcon />,
    title: "Dishes",
    // phara: [{ text: "Orders List" }, { text: "Order Details" }],
    text: "Dishes List",
    text: "Dish Details",
    text: "Add Dish",
    text: "Edit Dish",
  },
  {
    icon: <SelIcon />,
    title: "Sellers",
    // phara: [{ text: "Orders List" }, { text: "Order Details" }],
    text: "Sellers List",
    text: "Seller Details",
    text: "Add Seller",
    text: "Edit Seller",
  },
  {
    icon: <WalletIcon />,
    class: "hidden",
    title: "Wallet",
  },
];

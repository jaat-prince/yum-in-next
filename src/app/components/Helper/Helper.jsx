import { title } from "process";
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
  StarIcon,
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
export const cateData = [
  {
    img: "/assets/svg/coffee.svg",
    text: "Coffee",
  },
  {
    img: "/assets/svg/burger.svg",
    text: "Burger",
  },
  {
    img: "/assets/svg/noodles.svg",
    text: "Noodles",
  },
  {
    img: "/assets/svg/pizza.svg",
    text: "Pizza",
  },
];
export const sellData = [
  {
    img: "/assets/png/pizza-it.png",
    title: "Italian Pizza",
    text: "$39.5",
  },
  {
    img: "/assets/png/burger-vg.png",
    title: "Veg Burger",
    text: "$483",
  },
  {
    img: "/assets/png/noodles-sp.png",
    title: "Spaghetti",
    text: "$23",
  },
];
export const tableData = [
  {
    title: "#C0E4F7",
    img: "/assets/png/pizza-it.png",
    name: "Italian Pizza",
    rate: <StarIcon />,
    text: "(231)",
    price: "$359.69",
  },
  {
    title: "#12939F",
    img: "/assets/png/burger-vg.png",
    name: "Veg Burger",
    rate: <StarIcon />,
    text: "(523)",
    price: "$350.3",
  },
  {
    title: "#9F36CA",
    img: "/assets/png/noodles-sp.png",
    name: "Spaghetti",
    rate: <StarIcon />,
    text: "(6667)",
    price: "$67.99",
  },
  {
    title: "#A657A0",
    img: "/assets/png/salad.png",
    name: "Mix Salad",
    rate: <StarIcon />,
    text: "(4325)",
    price: "$21.49",
  },
  {
    title: "#8CD211",
    img: "/assets/png/red.png",
    name: "Red Velvet Cake",
    rate: <StarIcon />,
    text: "(6667)",
    price: "$463.61",
  },
  {
    title: "#5191A8",
    img: "/assets/png/tea.png",
    name: "Espresso Coffee",
    rate: <StarIcon />,
    text: "(1055)",
    price: "$333.31",
  },
];

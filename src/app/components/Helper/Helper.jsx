import { DashIcon, DotIcon, EarthIcon, ManageIcon, OrderIcon } from "./Icon";

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
export const sideData = [
  {
    icon: <DashIcon />,
    text: "Dashboard",
  },
  {
    icon: <ManageIcon />,
    text: "Manage",
  },
];

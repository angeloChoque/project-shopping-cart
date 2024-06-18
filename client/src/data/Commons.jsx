import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CiMobile2 } from "react-icons/ci";
import { FaTabletAlt } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { TbDeviceAirtag } from "react-icons/tb";
import { IoTvSharp } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";

export const ITEMS_HEADER = [
  {
    title: "Mobil",
    icon: <ArrowDropDownIcon />,
    icon2: <CiMobile2 fontSize={"20px"} />,
    path:"/",
    items: ["iPhone", "Samsung", "LG", "Huawei"],
  },
  {
    title: "Tablet",
    icon: <ArrowDropDownIcon />,
    icon2: <FaTabletAlt fontSize={"20px"} />,
    path:"/",
    items: ["iPad", "Tablet Samsung", "Tablet LG", "Huawei"],
  },
  {
    title: "Laptop",
    icon: <ArrowDropDownIcon />,
    icon2: <IoMdLaptop fontSize={"20px"} />,
    path:"/",
    items: ["MacBook", "ASUS", "MSI", "ACER", "Dell", "Gigabytes"],
  },
  {
    title: "Accessories",
    icon: <ArrowDropDownIcon />,
    icon2: <TbDeviceAirtag fontSize={"20px"} />,
    path:"/",
    items: ["Cases", "Protections"],
  },
  {
    title: "TV",
    icon: <ArrowDropDownIcon />,
    icon2: <IoTvSharp fontSize={"20px"} />,
    path:"/",
    items: ["Samsung TV", "LG TV", "iMac", "Dell TV"],
  },
  {
    title: "Headphones",
    icon: <ArrowDropDownIcon />,
    icon2: <CiHeadphones fontSize={"20px"} />,
    path:"/",
    items: ["AirPods", "HUAWEI FreeBuds", "Galaxy Buds"],
  },
  {
    title: "On Sale",
    icon: <ArrowDropDownIcon />,
    icon2: <BiSolidOffer fontSize={"20px"} />,
    path:"/",
    items: [
      "Samsung Galaxy 11",
      "Samsung Galaxy S11",
      "iPhone 11 Pro",
      "Honor 12",
    ],
  },
];

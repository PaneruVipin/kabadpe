import { GiDetour } from "react-icons/gi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiTreeStructureFill } from "react-icons/pi";
import { HiMiniInformationCircle } from "react-icons/hi2";
import {
  FaGlobeAmericas,
  FaUserTag,
  FaGlobeAfrica,
  FaBell,
} from "react-icons/fa";
import { SiHackster, SiHelpscout } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { RiUserFollowFill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { MdLiving, MdOutlineCottage, MdOutlineEventSeat } from "react-icons/md";
import { FaAffiliatetheme, FaArtstation, FaNewspaper } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
export const climeCategories = [
  { name: "Events", colorCode: "#f8f8e6", Icon: MdOutlineEventSeat },
  { name: "News", colorCode: "#edf5f1", Icon: FaNewspaper },
  // { name: "Fundraise", colorCode: "#dfebff" },
  { name: "Sustainability hacks", colorCode: "#ffddd9", Icon: SiHackster },
  {
    name: "Innovations & Eco-finds",
    colorCode: "#f7eaee",
    Icon: MdOutlineCottage,
  },
  { name: "Sustainable Living", colorCode: "#ffcee6", Icon: MdLiving },
  {
    name: "Sustainable Fasion & cosmetics",
    colorCode: "#dfc5ff",
    Icon: IoIosPricetags,
  },
  { name: "Eco-Tourism", colorCode: "#c8fae3", Icon: GiDetour },
  { name: "Culture, art & food", colorCode: "#dfebff", Icon: FaArtstation },
  // { name: "ClimStripe Shift corne", colorCode: "#eabea0" },
  { name: "Green Jobs", colorCode: "#e8e6ae", Icon: PiTreeStructureFill },
  { name: "Information", colorCode: "#fed5b4", Icon: HiMiniInformationCircle },
];

"use client";

import { PiNumberSevenFill } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FaSearchPlus } from "react-icons/fa";
import { MdMic } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { GiThreeLeaves } from "react-icons/gi";
import { FaCalendar } from "react-icons/fa";
const icons = [
  {
    icon: <PiNumberSevenFill />,
  },
  {
    icon: <MdHomeFilled />,
  },
  {
    icon: <GrGallery />,
  },
  {
    icon: <FaSearchPlus />,
  },
  {
    icon: <MdMic />,
  },
  {
    icon: <TfiMenuAlt />,
  },
  {
    icon: <FaCalendar />,
  },
  {
    icon: <FaSearchPlus />,
  },
  // {
  //   icon: <IoIdCard />,
  // },
  // {
  //   icon: <FaIdCard />,
  // },
  // {
  //   icon: <Gi3dStairs />,
  // },
  //   {
  //     icon: <PiSubtractSquareDuotone />,
  //   },
  //   {
  //     icon: <GrGallery />,
  //   },
  //   {
  //     icon: <FaCalendarAlt />,
  //   },

  //   {
  //     icon: <TfiMenuAlt />,
  //   },
  //   {
  //     icon: <GiThreeLeaves />,
  //   },
  //   {
  //     icon: <PiNumberFiveFill />,
  //   },
  //   {
  //     icon: <FaRoad />,
  //   },
  //   {
  //     icon: <GiSandsOfTime />,
  //   },
  //   {
  //     icon: <FiAnchor />,
  //   },
];

export const CategoryAdd = () => {
  return (
    <>
      <p>Hello</p>
      {icons.map((item, index) => {
        return <div value="green">{item.icon}</div>;
      })}
    </>
  );
};

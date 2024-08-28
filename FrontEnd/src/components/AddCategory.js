"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdHome } from "react-icons/md";
import { IoIdCard } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import { Gi3dStairs } from "react-icons/gi";
import { PiSubtractSquareDuotone } from "react-icons/pi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdHomeFilled } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { FaSearchPlus } from "react-icons/fa";
import { MdMic } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { GiThreeLeaves } from "react-icons/gi";
import { FaCalendar } from "react-icons/fa";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberSevenFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";
import { FiAnchor } from "react-icons/fi";
export const AddCategory = () => {
  return (
    <div className="w-[494px] h-[236px] bg-white ">
      <div className="w-[446px] h-[236px]">
        <div className="w-[446px] h-[68px]">
          <div className="flex justify-between">
            <h1>Add Category</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[84px] h-[40px]">
              <SelectValue placeholder="" />
            </SelectTrigger>

            <SelectContent className="text-[#0166ff] hover:to-blue-600">
              <div className="  w-[312px] h-[336px] border rounded-xl flex flex-col ">
                <div className=" flex flex-flows-rows-6 ">
                  <div className="w-[312px] h-[44px] flex gap-1">
                    <SelectItem value="green">
                      <MdHomeFilled className="w-[20px] h-[20px]" />
                    </SelectItem>
                    <SelectItem value="zl">
                      <MdHome className="w-[20px] h-[20px]" />
                    </SelectItem>
                    <SelectItem value="huts">
                      <IoIdCard className="w-[20px] h-[20px]" />
                    </SelectItem>
                    <SelectItem value="solior">
                      <FaIdCard className="w-[20px] h-[20px]" />
                    </SelectItem>
                    <SelectItem value="zss">
                      <Gi3dStairs className="w-[20px] h-[20px]" />
                    </SelectItem>
                  </div>
                </div>
                <div className=" flex flex-flows-rows-6">
                  <SelectItem value="osjw">
                    <FaSearchPlus className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="zhdgfl">
                    <MdMic className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="huhduits">
                    <FaCalendarAlt className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="solhdior">
                    <TfiMenuAlt className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="zsjohss">
                    <FaCalendar className="w-[20px] h-[20px]" />
                  </SelectItem>
                </div>
                <div className=" flex flex-flows-rows-6">
                  <SelectItem value="osjtgrfhgbdfw">
                    <PiNumberSevenFill className="w-[20px] h-[20px]" />
                  </SelectItem>

                  <SelectItem value="huhduftrgfggits">
                    <FaRoad className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="soltrtfhdgfior">
                    <GiSandsOfTime className="w-[20px] h-[20px]" />
                  </SelectItem>

                  <SelectItem value="hgkdtrygtfhsh">
                    <FiAnchor className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="ghtrtgtdfhjhg">
                    <PiNumberSevenFill className="w-[20px] h-[20px]" />
                  </SelectItem>
                </div>
                <div className=" flex flex-flows-rows-6">
                  <SelectItem value="osjtrgw">
                    <FaSearchPlus className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="zhtrtdgfl">
                    <MdMic className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="huhdtrtgfuits">
                    <FaCalendarAlt className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="solhrtydior">
                    <TfiMenuAlt className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="zstrytjohss">
                    <FaCalendar className="w-[20px] h-[20px]" />
                  </SelectItem>
                </div>
                <div className="w-[312px] h-[36px] flex gap-1">
                  <SelectItem value="grtrygtfeen">
                    <MdHomeFilled className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="zrtrtyl">
                    <MdHome className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="htrtryuts">
                    <IoIdCard className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="solirryor">
                    <FaIdCard className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="ztryss">
                    <Gi3dStairs className="w-[20px] h-[20px]" />
                  </SelectItem>
                </div>
                <div className=" flex flex-flows-rows-6">
                  <SelectItem value="osggdjw">
                    <FaSearchPlus className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="zhdgfhgfl">
                    <MdMic className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="huhdugfggfits">
                    <FaCalendarAlt className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="solhdgfhior">
                    <TfiMenuAlt className="w-[20px] h-[20px]" />
                  </SelectItem>
                  <SelectItem value="zsjogfdghss">
                    <FaCalendar className="w-[20px] h-[20px]" />
                  </SelectItem>
                </div>
                <div className="w-[270px] h-[2px] bg-[#ebebeb] mt-3 ml-7"></div>
                <div className="flex gap-9 justify-center mt-5 ml-2">
                  <button className=" w-[24px] h-[24px] border rounded-full bg-[#0166ff] hover:bg-blue-800"></button>
                  <button className=" w-[24px] h-[24px] border rounded-full bg-[#01b3ff] hover:bg-blue-500"></button>
                  <button className=" w-[24px] h-[24px] border rounded-full bg-[#41cc00] hover:bg-green-600 "></button>
                  <button className=" w-[24px] h-[24px] border rounded-full bg-[#f9d100] hover:bg-yellow-500"></button>
                  <button className=" w-[24px] h-[24px] border rounded-full bg-[#ff7b01] hover:bg-orange-600"></button>
                </div>
              </div>
            </SelectContent>
          </Select>

          <Input type="text" />
        </div>
        <div className="w-32 ">
          <button className="bg-[#16a34a] w-[446px] h-[40px] rounded-full mt-6">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

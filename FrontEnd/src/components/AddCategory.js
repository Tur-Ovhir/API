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
    <div className="w-[494px] h-[236px] bg-white">
      <div className="w-[446px] h-[236px]">
        <div className="w-[446px] h-[68px]">
          <div className="flex justify-between">
            <h1>Add Category</h1>
          </div>
        </div>
        <div className="flex gap-5">
          <Select>
            <SelectTrigger className="w-[84px] h-[48px]">
              <SelectValue placeholder="" />
            </SelectTrigger>

            <SelectContent>
              <div className="  w-[312px] h-[336px] border rounded-xl flex flex-col ">
                <div className=" flex flex-flows-rows-6 ">
                  <SelectItem value="green">
                    <MdHomeFilled className="w-[24px] h-[24px] " />
                  </SelectItem>
                  <SelectItem value="zl">
                    <MdHome className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="huts">
                    <IoIdCard className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="solior">
                    <FaIdCard className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="zss">
                    <Gi3dStairs className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="hgsh">
                    <PiSubtractSquareDuotone className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="ghdg">
                    <GrGallery className="w-[24px] h-[24px]" />
                  </SelectItem>
                </div>
                <div className=" flex flex-flows-rows-6">
                  <SelectItem value="osjw">
                    <FaSearchPlus className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="zhdgfl">
                    <MdMic className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="huhduits">
                    <FaCalendarAlt className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="solhdior">
                    <TfiMenuAlt className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="zsjohss">
                    <FaCalendar className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="hgkhsh">
                    <GiThreeLeaves className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="ghdhjhg">
                    <PiNumberFiveFill className="w-[24px] h-[24px]" />
                  </SelectItem>
                </div>
                <div className=" flex flex-flows-rows-6">
                  <SelectItem value="osjbdfw">
                    <PiNumberSevenFill className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="zhdgfgfl"></SelectItem>
                  <SelectItem value="huhdufggits">
                    <FaRoad className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="solhdgfior">
                    <GiSandsOfTime className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="zsjdohss"></SelectItem>
                  <SelectItem value="hgkdfhsh">
                    <FiAnchor className="w-[24px] h-[24px]" />
                  </SelectItem>
                  <SelectItem value="ghdfhjhg"></SelectItem>
                </div>
              </div>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[350px] h-[48px]">
              <SelectValue placeholder="Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-32">
          <Dialog className="">
            <DialogTrigger className="bg-[#16a34a] w-[446px] h-[40px] rounded-full mt-6">
              +Add
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

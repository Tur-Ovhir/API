import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { FaEye } from "react-icons/fa";
import { Slider } from "@/components/ui/slider";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { IoHomeSharp } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { Chevron } from "@/Asset/chevronright";
import { Add } from "@/components/Add";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { AddCategory } from "./AddCategory";
import { FaPlus } from "react-icons/fa6";
export const Sidebar = () => {
  return (
    <div className="w-[282px] h-[1080px] border-2">
      <div className="w-[250px] h-[88px] ">
        <h1 className="text-xl">Records</h1>

        <Dialog>
          <DialogTrigger className="bg-[#0166ff] w-[250px] h-[32px] rounded-full mt-6">
            +Add
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <Add />
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-4">
        <Input
          type="text"
          placeholder="Search"
          className="rounded-xl w-[250px] h-[32px] bg-[#f3f4f6]"
        />
      </div>
      <div className="w-[109px] h-[144px] mt-3 ml-2 ">
        <h1>Types</h1>
        <div className="mt-6 gap-10">
          <div className="flex-row flex ">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="rounded-full border`" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              ></label>
            </div>

            <h1>All</h1>
          </div>
          <div className="flex-row flex">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="rounded-full" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              ></label>
            </div>
            <h1>Income</h1>
          </div>
          <div className="flex-row flex">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="rounded-full" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              ></label>
            </div>
            <h1>Expence</h1>
          </div>
        </div>
      </div>
      <div className="w-[250px] h-[520px]  mt-3 ">
        <div className="flex justify-between">
          <h1>Category</h1>
          <h1 className="text-[#CDD0D4]">clear</h1>
        </div>
        <div className="mt-4 gap-4 flex flex-col text-[#1f2937]">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Food & Drinks</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Food & Drinks</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Shopping</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Housing</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Transportation</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Vehicle</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Life & Entertainment</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Communication, PC</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Financial expenses</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Investments</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Income</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <FaEye className="text-gray-500 hover:text-black" />
              <h1>Others</h1>
            </div>
            <div>
              <Chevron />
            </div>
          </div>
          <div>
            <Dialog>
              <DialogTrigger className=" w-[250px]l h-[32px] rounded-full text-2xl">
                <div className="flex gap-2 justify-center">
                  <FaPlus className="text-blue-600" />
                  Add Category
                </div>
              </DialogTrigger>
              <DialogContent>
                <div>
                  <AddCategory />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="w-[245px] h-[100px]  mt-16">
        <h1>Amount Range</h1>
        <div className="gap-3 flex mt-2">
          <Button className="bg-slate-200 w-[115px] h-[48px] text-zinc-950 border rounded-xl">
            {value[0]}
          </Button>
          <Button className="bg-slate-200 w-[115px] h-[48px] text-zinc-950 border rounded-xl">
            {value[1]}
          </Button>
        </div>
        <Slider
          className="mt-6 text-[#0166ff] bg-black"
          value={value}
          onValueChange={handleChange}
          min={0}
          max={1000}
          step={1}
        />
      </div>
      <div className="w-[245px] h-[20px] flex mt-6 justify-between ">
        <h1> {value[0]} </h1>
        <h1> {value[1]} </h1>
      </div>
    </div>
  );
};

"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useContext } from "react";

import { AddCategory } from "./AddCategory";
import { AccountContext } from "./utils/context";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";

export const Container = () => {
  const { userInfo, setUserInfo } = useContext(AccountContext);
  const { accounts, setAccounts } = useContext(AccountContext);

  const [value, setValue] = useState([0, 1000]);

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  console.log(userInfo);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/accounts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setAccounts(response.data);
    };
    getData();
  }, []);

  const createAccount = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/accounts",
        userInfo
      );
    } catch (error) {
      console.error(error);
    }
  };
  const deleteAccount = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/accounts/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    setAccounts(accounts.filter((account) => account.id !== id));
  };

  return (
    <div className="w-full h-[1100px] bg-[#f3f4f6] flex">
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
              {/* {accounts.map((account) => (
                <div className="flex gap-2">
                  <FaEye className="text-gray-500 hover:text-black" />
                  <h1>Others</h1>
                </div>
              ))} */}
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
      <div></div>
      <div className="w-[894px] h-[1080px] ml-4 mt-2">
        <div className=" flex-row  flex  justify-between ">
          <div className="flex gap-1"></div>
          <Select>
            <SelectTrigger className="w-[180px] h-[48px] border">
              <SelectValue placeholder="Nevest first" />
            </SelectTrigger>
            <SelectContent>
              {/* <Dark/>  */}
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="ml-10  ">
          <Carousel className=" w-[108px] h-[32px] flex justify-between -mt-4">
            <CarouselContent>
              <CarouselItem> Last 3 Days</CarouselItem>
              <CarouselItem>Last 4 Days</CarouselItem>
              <CarouselItem>Last 6 Days</CarouselItem>
              <CarouselItem>Last 8 Days</CarouselItem>
              <CarouselItem>Last 10 Days</CarouselItem>
              <CarouselItem>Last 15 Days</CarouselItem>
              <CarouselItem>Last 20 Days</CarouselItem>
              <CarouselItem>Last 22 Days</CarouselItem>
              <CarouselItem>Last 24 Days</CarouselItem>
              <CarouselItem> Last 26 Days</CarouselItem>
              <CarouselItem> Last 28 Days</CarouselItem>
              <CarouselItem> Last 30 Days</CarouselItem>
              <CarouselItem> Last 31 Days</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="w-[830px] h-[48px] border flex  rounded-xl bg-white mt-4 items-center justify-between ">
            <div className="flex gap-3">
              <Checkbox className="ml-3 w-[20px] h-[20px]" />
              <h1>Select All</h1>
            </div>
            <div className="text-red-600">-1.550.000₮</div>
          </div>
        </div>
        <div className="mt-3">
          <h1>Today</h1>
        </div>

        <div className="">
          {accounts.map((account) => (
            <div className="flex justify-between">
              <div className="w-[830px] h-[62px] border flex  justify-between rounded-xl bg-white mt-4 items-center ">
                <Checkbox className="ml-3 w-[24px] h-[24px]" />
                <div>{account.Select}</div>
                <div className="text-green-400">{account.amount}</div>
                <div className="text-blue-500"> {account.type}</div>
                <div className="text-yellow-200">{account.date}</div>
                <div className="text-pink-900">{account.time}</div>

                <button
                  onClick={() => deleteAccount(account.id)}
                  className="w-[100px] h-[30px] bg-red-600 rounded-full hover:bg-red-800 "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h1>Yesterday</h1>
        </div>
      </div>
    </div>
  );
};

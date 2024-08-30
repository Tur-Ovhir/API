"use client";
import { Dashboard } from "@/app/dashboard/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
// import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddCategory } from "@/components/AddCategory";

import { Add } from "@/components/Add";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggle";

export const Navbar = () => {
  return (
    <div className="w-full h-[72px] bg-white flex justify-between flex-row mt-3">
      <div className=" gap-3 ml-3 flex-row flex w-[226px] h-[40px] justify-between">
        <Link href="/login">
          <img className="w-[28px] h-[28px]" src="Vector.jpg" />
        </Link>
        <Link href="/dashboard">
          <p className="text-black">Dashboard</p>
        </Link>
        <Link href="/container">
          <h1 className="text-[#0F172A]">Records</h1>
        </Link>
      </div>
      <div className="flex-row flex gap-5">
        <div className="mt-1">
          <ThemeToggleButton />
        </div>
        <div>
          {/* <h1 className="text-blue-500 font-medium text-2xl hover:text-blue-800">
              Log Out
            </h1> */}
          <Dialog>
            <DialogTrigger className="text-blue-800 text-2xl">
              Log Out
            </DialogTrigger>
            <DialogContent>
              <div className="flex justify-center gap-2">
                <div className="flex ">
                  <img className="w-[28px] h-[28px]" src="Vector.jpg" />
                </div>
                <h1 className="text-xl">Та гарахдаа итгэлтэй байна уу?</h1>
                <img className="w-[28px] h-[28px]" src="Vector.jpg" />
              </div>
              <div className="flex gap-4 mt-3 justify-center">
                <Link href="/login">
                  {/* <Link href="/loading"> */}
                  <button className="rounded-xl  bg-blue-700 text-white w-[100px] h-[30px] hover:bg-blue-950">
                    Тийм
                  </button>
                  {/* </Link> */}
                </Link>

                <button className="rounded-xl bg-blue-700 text-white  w-[100px] h-[30px  hover:bg-blue-950">
                  Үгүй
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Dialog>
          <DialogTrigger className="bg-[#0166ff] w-[99px] h-[32px] rounded-full">
            +Record
          </DialogTrigger>
          <DialogContent>
            <div>
              <Add />
            </div>
          </DialogContent>
        </Dialog>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

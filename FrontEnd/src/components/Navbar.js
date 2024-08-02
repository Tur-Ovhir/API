"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { AddCategory } from "@/components/AddCategory";
import { CategoryAdd } from "./CategoryAdd";
import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="w-full h-[72px] bg-white flex justify-between flex-row">
      <div className=" gap-3 ml-3 flex-row flex w-[226px] h-[40px] justify-between">
        <Link href="/login">
          <img className="w-[28px] h-[28px]" src="Vector.jpg" />
        </Link>
        <p className="text-black">Dashboard</p>
        <h1 className="text-[#0F172A]">Records</h1>
      </div>
      <div className="flex-row flex gap-3">
        <Dialog>
          <DialogTrigger className="bg-[#0166ff] w-[99px]l h-[32px] rounded-full">
            +Record
          </DialogTrigger>
          <DialogContent>
            <div>
              {/* <AddCategory /> */}
              <CategoryAdd />
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

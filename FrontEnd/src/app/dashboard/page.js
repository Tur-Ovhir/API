"use client";
import { Navbar } from "@/components/Navbar";
import { useContext } from "react";
import { AccountContext } from "@/components/utils/context";
import React from "react";
import { LuNfc } from "react-icons/lu";
import { Charts } from "@/components/Charts";
export default function dashboard() {
  const { accounts, setAccounts } = useContext(AccountContext);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] h-[920px] border bg-[#f3f4f6] mt-2">
        <div>
          <Navbar />
        </div>
        <div className="flex justify-between mt-2">
          <div className="w-[384px]  h-[216px] bg-[#0182ff] rounded-xl">
            <div className="flex gap-3 mt-4 ml-4">
              <img className="w-[28px] h-[28px]  " src="Vector.jpg" />
              <h1 className="text-2xl text-white">Geld</h1>
            </div>
            <div className="mt-16 ml-4">
              <h1 className="text-[#80c1ff] text-xl ">Cash</h1>
            </div>
            <div className="ml-4 flex gap-36">
              <h1 className="text-white text-2xl">10,000,000</h1>
              <LuNfc className=" text-white mt-2" />
            </div>
          </div>
          <div className="w-[384px]  h-[216px] bg-white rounded-xl ">
            <div className="flex gap-2 ml-3 mt-2">
              <div className="w-[14px] h-[14px] border rounded-full bg-green-400 mt-1"></div>
              <h1>Your Income</h1>
            </div>

            <div className="w-[384px] h-[3px] bg-[#f3f4f6] mt-4"></div>
            <div className="flex flex-col gap-3 mt-4 ml-3">
              <h1 className="text-3xl">1,200,000₮</h1>
              <h3 className="text-[#64748b]">Your Income Amount</h3>
              <div>
                <div className="flex gap-3">
                  <div className="w-[24px] h-[24px] border rounded-full bg-green-400 items-center justify-center flex">
                    {" "}
                  </div>
                  <div>
                    <h1>32% from last month</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[384px]  h-[216px] bg-white rounded-xl ">
            <div className="flex gap-2 ml-3 mt-2">
              <div className="w-[14px] h-[14px] border rounded-full bg-blue-600 mt-1"></div>
              <h1>Total Expense</h1>
            </div>
            <div className="w-[384px] h-[3px] bg-[#f3f4f6] mt-4"></div>
            <div className="flex flex-col gap-3 mt-4 ml-3">
              <h1 className="text-3xl">1,200,000₮</h1>
              <h3 className="text-[#64748b]">Your Income Amount</h3>
              <div>
                <div className="flex gap-3">
                  <div className="w-[24px] h-[24px] border rounded-full bg-green-400 items-center justify-center flex">
                    {" "}
                  </div>
                  <div>
                    <h1>32% from last month</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-[588px] h-[284px] bg-white rounded-xl">
            {/* <Charts /> */}
          </div>
          <div className="w-[588px] h-[284px] bg-white rounded-xl"></div>
        </div>
        <div className="w-[1200px] h-[486px] bg-white mt-4 justify-between ">
          <div className="justify-center flex flex-col items-center">
            <div className="w-[1152px] h-[56px] bg-white mt-2 items-center flex ">
              <h1>Last Records</h1>
            </div>

            <div className="">
              {accounts.map((account) => (
                <div className="flex justify-between">
                  <div className="w-[1152px] h-[80px] border flex  justify-between rounded-xl bg-white mt-4 items-center ">
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
          </div>
        </div>
      </div>
    </div>
  );
}

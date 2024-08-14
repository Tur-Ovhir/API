import { Navbar } from "@/components/Navbar"
import React from "react"
import { GoHomeFill } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
import { LuNfc } from "react-icons/lu";
export default function dashboard() {
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
                                    <div className="w-[24px] h-[24px] border rounded-full bg-green-400 items-center justify-center flex"> </div>
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
                                    <div className="w-[24px] h-[24px] border rounded-full bg-green-400 items-center justify-center flex"> </div>
                                    <div>
                                        <h1>32% from last month</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <div className="w-[588px] h-[284px] bg-red-500 rounded-xl"></div>
                    <div className="w-[588px] h-[284px] bg-red-500 rounded-xl"></div>
                </div>
                <div className="w-[1200px] h-[486px] bg-white mt-4 justify-between ">
                    <div className="justify-center flex flex-col items-center">
                        <div className="w-[1152px] h-[56px] bg-white mt-2 items-center flex ">
                            <h1>Last Records</h1>
                        </div>
                        <div className="w-[1152px] h-[80px] bg-white mt-2 items-center flex justify-between">
                            <div className="flex">
                                <div className="h-[40px] w-[40px]  rounded-full bg-blue-600 flex justify-center items-center">
                                    <GoHomeFill className="w-[20px] h-[20px] text-white" />
                                </div>
                                <div className="ml-3">
                                    <h1>Lending&Renting</h1>
                                    <h5 className="text-[#6b7280]">3 hours ago</h5>
                                </div>
                            </div>
                            <div className="text-[#84cc16]">
                                -1000₮
                            </div>
                        </div>
                        <div className="w-[1152px] h-[80px] bg-white mt-2 items-center flex justify-between">
                            <div className="flex">
                                <div className="h-[40px] w-[40px]  rounded-full bg-blue-600 flex justify-center items-center">
                                    <GoHomeFill className="w-[20px] h-[20px] text-white" />
                                </div>
                                <div className="ml-3">
                                    <h1>Lending&Renting</h1>
                                    <h5 className="text-[#6b7280]">3 hours ago</h5>
                                </div>
                            </div>
                            <div className="text-[#84cc16]">
                                -1000₮
                            </div>
                        </div>
                        <div className="w-[1152px] h-[80px] bg-white mt-2 items-center flex justify-between">
                            <div className="flex">
                                <div className="h-[40px] w-[40px]  rounded-full bg-blue-600 flex justify-center items-center">
                                    <GoHomeFill className="w-[20px] h-[20px] text-white" />
                                </div>
                                <div className="ml-3">
                                    <h1>Lending&Renting</h1>
                                    <h5 className="text-[#6b7280]">3 hours ago</h5>
                                </div>
                            </div>
                            <div className="text-[#84cc16]">
                                -1000₮
                            </div>
                        </div>
                        <div className="w-[1152px] h-[80px] bg-white mt-2 items-center flex justify-between">
                            <div className="flex">
                                <div className="h-[40px] w-[40px]  rounded-full bg-blue-600 flex justify-center items-center">
                                    <GoHomeFill className="w-[20px] h-[20px] text-white" />
                                </div>
                                <div className="ml-3">
                                    <h1>Lending&Renting</h1>
                                    <h5 className="text-[#6b7280]">3 hours ago</h5>
                                </div>
                            </div>
                            <div className="text-[#84cc16]">
                                -1000₮
                            </div>
                        </div>
                        <div className="w-[1152px] h-[80px] bg-white mt-2 items-center flex justify-between">
                            <div className="flex">
                                <div className="h-[40px] w-[40px]  rounded-full bg-blue-600 flex justify-center items-center">
                                    <GoHomeFill className="w-[20px] h-[20px] text-white" />
                                </div>
                                <div className="ml-3">
                                    <h1>Lending&Renting</h1>
                                    <h5 className="text-[#6b7280]">3 hours ago</h5>
                                </div>
                            </div>
                            <div className="text-[#84cc16]">
                                -1000₮
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
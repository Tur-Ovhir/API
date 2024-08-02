"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const Signup = () => {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-[708px] h-[1024px] bg-white flex justify-center items-center border ">
        <div className="w-[384px] h-[555px]  flex flex-col ">
          <div className="gap-5 flex items-center justify-center">
            <img className="w-[28px] h-[28px]" src="Vector.jpg" />
            <h1>Geld</h1>
          </div>
          <div className="flex flex-col text-center mt-5">
            <h1>Create Geld Account</h1>
            <p className="text-[#334155]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="mt-3">
            <div className="flex flex-col gap-3 mt-5">
              <Input
                className="w-[384px] h-[48px] bg-[#f3f4f6]"
                type="email"
                placeholder="Name"
              />
              <Input
                className="w-[384px] h-[48px] bg-[#f3f4f6]"
                type="email"
                placeholder="Email"
              />
              <Input
                className="w-[384px] h-[48px] bg-[#f3f4f6]"
                type="email"
                placeholder="Password"
              />
              <Input
                className="w-[384px] h-[48px] bg-[#f3f4f6]"
                type="email"
                placeholder="Re-Password"
              />
            </div>

            <div className="mt-5">
              <Link href="/loading">
                <button
                  className="w-[384px] h-[48px] bg-blue-600 rounded-xl text-white hover:bg-blue-800"
                  type="submit"
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="flex gap-3 text-center justify-center mt-11">
              <h1>Already have account?</h1>

              <Link href="/loading">
                <p className="text-[#0166ff]"> Sign up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[708px] h-[1024px] bg-blue-600 border"></div>
    </div>
  );
};
export default Signup;

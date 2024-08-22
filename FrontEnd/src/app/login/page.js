"use client";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/utils/AuthProvider";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  return (
    <div className="flex justify-center mt-">
      <div className="w-[708px] h-[1024px] bg-white flex justify-center items-center border ">
        <div className="w-[384px] h-[427px]  flex flex-col">
          <div className="gap-3 flex items-center justify-center">
            <img className="w-[28px] h-[28px]" src="Vector.jpg" />
            <h1>Geld</h1>
          </div>
          <div className="flex flex-col text-center mt-5">
            <h1>Welcome Back</h1>
            <p className="text-[#334155]">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="mt-3">
            <div className="flex flex-col gap-3 mt-5">
              <Input
                className="w-[384px] h-[48px] bg-[#f3f4f6]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                className="w-[384px] h-[48px] bg-[#f3f4f6]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mt-5">
              <button
                className="w-[384px] h-[48px] bg-blue-600 rounded-xl text-white hover:bg-blue-800"
                type="submit"
                onClick={() => login(email, password)}
              >
                Log in
              </button>
            </div>
            <div className="flex gap-3 text-center justify-center mt-11">
              <h1>Don’t have account?</h1>
              <Link href="/signup">
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
export default Login;

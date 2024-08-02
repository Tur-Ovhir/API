import { Input } from "@/components/ui/input";
import Link from "next/link";
import { PiCoins } from "react-icons/pi";
export default function Balance() {
  return (
    <div className="w-full h-screen justify-center flex mt-8">
      <div className="w-[384px] h-[616px] b bg-white  justify-between flex flex-col items-center ">
        <div className="w-[240px] h-[136px]  flex justify-between flex-col">
          <div className="flex gap-3 justify-center ">
            <img className="w-[28px] h-[28px]" src="Vector.jpg" />
            <h1 className="text-3xl">Geld</h1>
          </div>
          <div className="justify-center flex ">
            <div className="w-[240px] h-[48px] flex">
              <div className="flex">
                <div className="w-[24px] h-[24px] border rounded-full bg-[#0166ff] text-white flex items-center justify-center">
                  <div>1</div>
                </div>
                <div className="w-[92px] border h-[4px] bg-[#0166ff] mt-3"></div>
                <div className="w-[24px] h-[24px] border rounded-full flex items-center justify-center bg-[#0166ff] text-white">
                  <div>2</div>
                </div>
                <div className="w-[92px] h-[4px] border bg-[#f3f4f6] mt-3"></div>
                <div className="w-[24px] h-[24px] border rounded-full flex items-center justify-center bg-[#f3f4f6]">
                  <div>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" flex justify-center flex-col ">
            <div className="w-[384px] h-[184px] flex flex-col items-center ">
              <div className="w-[225px] h-[96px]  justify-center flex flex-col items-center -mt-6 ">
                <div className="w-[48px] h-[48px] bg-[#0166ff]  rounded-full justify-center items-center flex">
                  <PiCoins className="w-[30px] h-[22px] text-white " />
                </div>
                <h1 className="">Set up your cash Balance</h1>
              </div>
              <div className="w-[384px] h-[64px] mt-3 ">
                <Input
                  className="bg-[#f3f4f6]"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="">
                <p className="text-[#5e6b7c] text-sm">
                  How much cash do you have in your wallet?
                </p>
              </div>
            </div>
            <div className="">
              <Link href="/done">
                <button
                  className="w-[384px] h-[48px] bg-blue-600 rounded-xl text-white hover:bg-blue-800"
                  type="submit"
                >
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

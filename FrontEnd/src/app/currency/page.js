import { CiMoneyBill } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function Currency() {
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
                <div className="w-[92px] border h-[1px] bg-[#f3f4f6] mt-3"></div>
                <div className="w-[24px] h-[24px] border rounded-full flex items-center justify-center bg-[#e5e7eb]">
                  <div>2</div>
                </div>
                <div className="w-[92px] h-[1px] border bg-[#f3f4f6] mt-3"></div>
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
                  <CiMoneyBill className="w-[30px] h-[18px] text-white border" />
                </div>
                <h1 className="text-xl">Select base currency</h1>
              </div>
              <div className="w-[384px] h-[64px] mt-3 ">
                <Select className="bg-[#F3F4F6] text-xl">
                  <SelectTrigger className="w-[384px] h-[64px]">
                    <SelectValue placeholder="MNT - Mongolian Tugrik" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      MNT - Mongolian Tugrik
                    </SelectItem>
                    <SelectItem value="dark">USA - DOLLAR</SelectItem>
                    <SelectItem value="India">INDIA - RUBIL</SelectItem>
                    <SelectItem value="Sung">SUNG - DOLLAR</SelectItem>
                    <SelectItem value="China">CHINA - YUAN</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[384px] h-[32px] mt-3">
                <p className="text-[#5e6b7c] text-sm">
                  Your base currency should be the one you use most often. All
                  transaction in other currencies will be calculated based on
                  this one
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/balance">
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

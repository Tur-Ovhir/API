import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { currency } from "@/app/currency/page";
import Link from "next/link";
export default function loading() {
  return (
    <div className="flex w-full h-screen items-center justify-center ">
      <div className="w-[173px] h-[144px]  items-center  flex flex-col justify-between ">
        <div className="flex gap-4">
          <Link href="/currency">
            <img className="w-[45px] h-[44px]" src="Vector.jpg" />
          </Link>
          <p className="text-4xl">Geld</p>
        </div>
        <div className="w-[123px] h-[72px] ">
          <div className="mt-4  items-center justify-center flex">
            <AiOutlineLoading3Quarters className="animate-spin w-[32px] h-[32px] text-blue-600" />
          </div>
          <div className="mt-5 text-center justify-center items-center ml-3">
            <h1>Түр хүлээнэ үү ...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

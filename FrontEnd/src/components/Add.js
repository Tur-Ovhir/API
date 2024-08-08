"use client";
import { CiSquareRemove } from "react-icons/ci";
import { AddCategory } from "@/components/AddCategory";
import { FaGift } from "react-icons/fa6";
import { PiTShirtLight } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiTaxiFill } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendarr } from "./Calendarr";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const Add = () => {
  const { userInfo, setUserInfo } = useContext(AccountContext);
  const [amount, setAmount] = useState("");
  // const [type, setType] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  console.log(userInfo);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/accounts");
      setAccounts(response.data);
    };
    getData();
  }, []);

  const createAccount = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/accounts",
        userInfo
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[792px] h-[512px] border bg-white rounded-xl flex-row">
      <div className="w-[750px] h-[512px] ml-4 mt-5">
        <div className="w-full h-[50px] justify-between flex ">
          <h1>Add Record</h1>
          <CiSquareRemove />
        </div>
        <div className="flex">
          <div className="w-[396px] h-[444px]">
            <div className="w-[348px] h-[40px] flex ">
              <div className="w-[172px] h-[40px] border rounded-full flex text-center items-center hover:bg-[#0166ff] justify-center">
                <button>Expense</button>
                {/* <Dialog>
                  <DialogTrigger>Expence</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle></DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog> */}
              </div>
              {/* <Button
                className="rounded-full w-[172px] h-[40px] hover:bg-blue-500"
                variant="outline"
              >
                Expense
              </Button> */}
              <div className="w-[172px] h-[40px] border rounded-full flex text-center hover:bg-[#16a34a] justify-center">
                <button>Income</button>
                {/* <Dialog>
                  <DialogTrigger>Income</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle></DialogTitle>
                      <DialogDescription> */}
                {/* This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers. */}
                {/* </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog> */}
              </div>

              {/* <Button
                className="rounded-full w-[172px] h-[40px] hover:bg-blue-500"
                variant="outline"
              >
                Income
              </Button> */}
            </div>
            <div className="flex flex-row">
              <input
                className="w-[348px] h-[76px] mt-5 bg-[#f3f4f6] text-[#9ca3af]"
                placeholder=" Amount
                ₮ 000.00"
                value={userInfo.value}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, amount: event.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[#1f2937]">Category</h1>
              <Dialog>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-4">
              <Select>
                <SelectTrigger className="w-[348px] h-[48px] border bg-[#f3f4f6] text-[#9ca3af]">
                  <SelectValue placeholder="Find or choose category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Add Category">
                    <div className="flex gap-2">
                      <CiCirclePlus className="w-[20px] h-[20px] text-white bg-[#0166ff] rounded-full" />{" "}
                      Add Category
                    </div>
                  </SelectItem>

                  <SelectItem value="dark">
                    <div className="flex gap-2">
                      <MdHomeFilled className="w-[18px] h-[19px] text-[#0166ff]" />{" "}
                      Home
                    </div>
                  </SelectItem>
                  <SelectItem value="Gift">
                    <div className="flex gap-2">
                      <FaGift className="text-[#ff4545]" /> Gift
                    </div>
                  </SelectItem>
                  <SelectItem value="Food">
                    <div className="flex gap-2">
                      <PiForkKnifeFill className="w-[17px] h-[19px] text-[#fb8a22]" />{" "}
                      Food
                    </div>
                  </SelectItem>
                  <SelectItem value="Drink">
                    <div className="flex gap-2">
                      <PiWineFill className="w-[15px] h-[21px] text-[#a804ab]" />{" "}
                      Drink
                    </div>
                  </SelectItem>
                  <SelectItem value="Taxi">
                    <div className="flex gap-2">
                      <PiTaxiFill className="w-[23px] h-[20px] text-[#eab308]" />{" "}
                      Taxi
                    </div>
                  </SelectItem>
                  <SelectItem value="Shopping">
                    <div className="flex gap-2">
                      <PiTShirtLight className="w-[24px] h-[18px] text-[#6f6cf3]" />{" "}
                      Shopping
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex gap-3">
              <div>
                <h1>Date</h1>
                {/* <Calendarr " /> */}
                <Input className="w-[168px] h-[48px]" type="date" />
              </div>
              <div className="flex flex-col ">
                <h1>Date</h1>
                <div className="w-[168px] h-[48px]">
                  <Input className="w-[168px] h-[48px]" type="time" />
                </div>
              </div>
            </div>
            <div className="w-[348px] h-[40px] bg-blue-500 mt-9 text-white rounded-full text-center">
              <button className="mt-2"> Add Record</button>
            </div>
          </div>
          <div className="w-[396px] h-[444px]">
            <h1>Payee</h1>
            <div>
              <Select>
                <SelectTrigger className="w-[348px] h-[48px] border bg-[#f3f4f6] mt-3 text-[#94a3b8]">
                  <SelectValue placeholder="Write here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <h1 className="mt-5">Note</h1>
            <div className="">
              <Input
                className="w-[348px] h-[280px] mt-5 bg-[#f3f4f6] text-[#9ca3af] flex items-start"
                type="text"
                placeholder="Write here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

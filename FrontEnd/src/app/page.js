"use client";
import { Dialog } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Container } from "@/components/Container";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/accounts`);
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div
      id="adad"
      className="w-[1186px] justify-center items-center container mx-auto"
    >
      {/* {data?.map((item) => (
        <div key={item.id}>
          <h1>{item.amount}</h1>
          <p>{item.type}</p>
        </div>
      ))} */}
      <Navbar></Navbar>
      <Container></Container>
    </div>
  );
}

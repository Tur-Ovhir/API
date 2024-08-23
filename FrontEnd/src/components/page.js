"use client";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [accounts, setAccounts] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/accounts");
      setAccounts(response.data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account, index) => (
          <li key={account.title + index}>
            {account.title} - {account.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

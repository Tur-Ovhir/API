"use client";

import { set } from "date-fns";

const { createContext, useState } = require("react");

export const AccountContext = createContext(null);
export const AccountContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    amount: "",
    type: "",
    date: "",
    payee: "",
    note: "",
  });
  const [category, setCategory] = useState({
    name: "",
    icon: null,
    color: "",
  });
  return (
    <AccountContext.Provider
      value={{ userInfo, setUserInfo, category, setCategory }}
    >
      {children}
    </AccountContext.Provider>
  );
};
// import React, { createContext, useState } from "react";

// export const AccountContext = createContext();

// export const AccountProvider = ({ children }) => {
//   const [userInfo, setUserInfo] = useState(null);

//   return (
//     <AccountContext.Provider value={{ userInfo, setUserInfo }}>
//       {children}
//     </AccountContext.Provider>
//   );
// };

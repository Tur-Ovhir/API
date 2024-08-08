"use client";

const { createContext, useState } = require("react");

export const AccountContext = createContext(null);
export const AccountContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ amount: "", type: "", date: "" });
  return (
    <AccountContext.Provider value={{ userInfo, setUserInfo }}>
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

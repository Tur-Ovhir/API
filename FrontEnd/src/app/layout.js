import { Inter } from "next/font/google";
import "./globals.css";
import {
  AccountContextProvider,
  UserContextProvider,
} from "@/components/utils/context";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/components/utils/AuthProvider";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AccountContextProvider>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </AccountContextProvider>
      <ToastContainer />
    </html>
  );
}

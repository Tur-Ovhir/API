import { Inter } from "next/font/google";
import "./globals.css";
import {
  AccountContextProvider,
  UserContextProvider,
} from "@/components/utils/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AccountContextProvider>
        <body className={inter.className}>{children}</body>
      </AccountContextProvider>
    </html>
  );
}

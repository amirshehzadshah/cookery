import { Inter } from "next/font/google";
import "./globals.css";
import Base from "./common/Base";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cookery",
  description: "develop by Amir Shehzad Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Base>
          {children}
        </Base>
      </body>
    </html>
  );
}
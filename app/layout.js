import {Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({subsets: ["latin"]})
export const metadata = {
  title: "Dashboard",
  description: "Geegpay challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" >
      <body className={`${plus.className} bg-[#fafafa] dark:bg-[#26282C] dark:text-[#fafafa] text-[#26282C]`}>{children}</body>
    </html>
  );
}

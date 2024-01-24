import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Geegpay challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#fafafa]">
      <body className={plus.className}>{children}</body>
    </html>
  );
}

"use client"
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { ThemeProvider } from "next-themes";
import Trends from "./component/Trends";
import Orders from "./component/Orders";
import Card from "./component/Card";
import Platform from "./component/Platform";
 
export default function Home() {
  return (
    <ThemeProvider attribute="class">
    <main className="m-0 transition-all box-border dark:bg-[#262626] dark:text-[#e5e5e5] flex w-full h-full">
      <Sidebar/>
      <div className="w-full lg:ml-[80px]">
        <Navbar/> 
        <div className="w-full gap-y-5 gap-x-4 px-4 py-5 flex flex-col items-start ">
            <div className="w-full flex gap-4 flex-col-reverse lg:flex-row">
              <Trends />
              <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:max-w-[40%] gap-3 row-start-1 row-span-2 col-start-4 col-end-6">
                <Card reversed={false} icon={"/box-tick.svg"} chart={"/order-trend.svg"} title={"Total Order"} value={350} isProfit={true} />
                <Card reversed={true} icon={"/box-arrow.svg"} chart={"/refund-trend.svg"} title={"Total Refund"} value={270} isProfit={false} />
                <Card reversed={false} icon={"/cart.svg"} chart={"/sales-trend.svg"} title={"Average Sales"} value={1567} isProfit={false} />
                <Card reversed={true} icon={"/coin.svg"} chart={"/income-trend.svg"} title={"Total Income"} value={"$350,000"} isProfit={true} />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <Orders />
              <Platform />
            </div>
        </div>
      </div>
    </main>
    </ThemeProvider>
  );
}

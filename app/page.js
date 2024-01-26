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
    <main className="m-0 flex w-full h-full">
      <Sidebar/>
      <div className="w-full">
        <Navbar/> 
        <div className="w-full">
          <div className="p-5 flex gap-3 w-full">
            <Trends className="h-full w-full" />
            <div className="grid grid-cols-2 max-w-[40%] grid-rows-2 gap-3">
              <Card reversed={false} icon={"/box-tick.svg"} chart={"/order-trend.svg"} title={"Total Order"} value={350} isProfit={true} />
              <Card reversed={true} icon={"/box-arrow.svg"} chart={"/refund-trend.svg"} title={"Total Refund"} value={270} isProfit={false} />
              <Card reversed={false} icon={"/cart.svg"} chart={"/sales-trend.svg"} title={"Average Sales"} value={1567} isProfit={false} />
              <Card reversed={true} icon={"/coin.svg"} chart={"/income-trend.svg"} title={"Total Income"} value={"$350,000"} isProfit={true} />
            </div>
          </div>
          <div className="p-5 pt-0 flex gap-3 w-full">
            <Orders className="w-full h-full"/>
            <Platform className="max-w-[40%]" />
          </div>
        </div>
      </div>
    </main>
    </ThemeProvider>
  );
}

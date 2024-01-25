"use client"
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { ThemeProvider } from "next-themes";
import Trends from "./component/Trends";
import Orders from "./component/Orders";
import Card from "./component/Card";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
    <main className="m-0 flex w-full h-full">
      <Sidebar/>
      <div className="w-full">
        <Navbar/> 
        <div className="p-5 flex gap-3">
          <Trends />
          <div>
            <Card title={"Total Order"}  />
          </div>
        </div> 
        <div className="p-5 flex gap-3">
          <Orders />
        </div>    
      </div>
    </main>
    </ThemeProvider>
  );
}

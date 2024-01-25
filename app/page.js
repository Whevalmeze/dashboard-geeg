"use client"
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
    <main className="m-0 flex w-full h-full">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>  
      </div>
    </main>
    </ThemeProvider>
  );
}

"use client"
import Image from "next/image"
import { useState } from "react"
export default function Navbar () {
    const [searchValue, setSearchValue] = useState();
    const currentDate = new Date();

    const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
    };

    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return (
        <nav className="flex justify-between border-b border-b-[#e5eaef] p-[18px] items-center">
            <h1 className="font-bold">Dashboard</h1>
            <div className="relative  max-w-[350px] w-1/2">
                <Image src="/search.svg" width={18} height={18} className="absolute top-4 left-4" />
                <input type="text" className="gap-2 h-12 w-full rounded-3xl bg-white border pl-10 border-[#dadddd]" name="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." id="" />
            </div>
            <div className="flex items-center gap-5">
            <div className="flex gap-2.5 cursor-pointer font-medium">
                <Image src="/solar_calendar-linear.svg" width={20} height={20}/>
                {formattedDate}
            </div>
                <div className="p-2.5 cursor-pointer border border-[#dadddd] rounded-full" >
                    <Image src="/solar_bell-outline.svg" width={20} height={20}/>
                </div>
                <div className="flex items-center border border-[#dadddd] rounded-3xl gap-2 px-2">
                    <Image src="/avatar.png" width={38} height={38}/>
                    <div className="flex flex-col text-center">
                        <span>Justin Begerson</span>
                        <span className="text-[#787486]">justin@gmail.com</span>
                    </div>
                    <Image src="/arrow-down.svg" className="cursor-pointer" width={20} height={20} />
                </div>
            </div>
        </nav>
    )
}
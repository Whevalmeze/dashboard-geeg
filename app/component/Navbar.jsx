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
        <nav className="flex justify-between dark:bg-[#171717] dark:border-[#262626] border-b border-b-[#e5eaef] py-[18px] px-5 gap-5 items-center">
                <Image className="block lg:hidden" src="/logo.svg" width={28} height={28} />
                <h1 className="font-bold text-xl">Dashboard</h1>
            <div className="flex items-center gap-5 max-w-[95%] w-[inherit]">
                <div className="relative w-[350px] hidden lg:block  max-w-[350px]">
                    <Image src="/search.svg" width={18} height={18} className="absolute top-4 left-4" />
                    <input type="text" className="gap-2 h-12 focus:border-[#dadddd] dark:bg-[#171717] rounded-3xl w-full bg-white border pl-10 border-[#dadddd]" name="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." id="" />
                </div>
            <div className="hidden md:flex gap-2.5 font-semibold items-center text-[#26282C] dark:text-[#eee] text-xs cursor-pointer">
                <Image src="/solar_calendar-linear.svg" className="dark:invert" width={20} height={20}/>
                {formattedDate}
            </div>
                <div className="p-2.5 cursor-pointer border border-[#dadddd] rounded-full" >
                    <Image src="/solar_bell-outline.svg" className="dark:invert" width={20} height={20}/>
                </div>
                <div className="flex items-center border border-[#dadddd] rounded-[28px] gap-2 py-[6px] px-2">
                    <Image src="/avatar.png" width={38} height={38}/>
                    <div className="hidden md:flex text-sm flex-col text-center">
                        <span>Justin Begerson</span>
                        <span className="text-[#787486]">justin@gmail.com</span>
                    </div>
                    <Image src="/arrow-down.svg" className="cursor-pointer" width={20} height={20} />
                </div>
            </div>
        </nav>
    )
}
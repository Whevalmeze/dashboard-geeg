"use client"
import Image from "next/image"
import MyApexChart from "./MyApexChart"

export default function Trends () {
    return (
            <div className="flex w-full lg:max-w-[60%] flex-col col-start-1 col-end-4 row-start-1 row-span-2 h-[408px] border bg-white dark:bg-[#171717] border-[#edf2f7] dark:border-[#262626] py-4 px-5 rounded-[14px]"> 
                <div className="flex text-lg justify-between w-full items-start">
                    <h2 className="font-bold">Sales Trend</h2>
                    <div className="flex cursor-pointer items-center gap-2">
                        <span>Sort by:</span>
                        <div className="flex gap-2.5 px-3 py-2 rounded-3xl items-center border border-[#E1DFDF]">
                            <span className="font-light text-xs">Weekly</span>
                            <Image src="/arrow-down.svg" alt="" width={20} height={20}/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center max-w-full max-h-full">
                    <MyApexChart />
                </div>
            </div>
    )
}
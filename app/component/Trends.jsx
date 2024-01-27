import Image from "next/image"

export default function Trends () {
    return (
            <div className="flex col-start-1 col-end-4 row-start-1 row-span-2 h-[408px] border bg-white dark:bg-inherit border-[#edf2f7] w-full py-4 px-5 rounded-[14px]"> 
                <div className="flex text-lg justify-between w-full items-start">
                    <h2 className="font-bold">Sales Trend</h2>
                    <div className="flex cursor-pointer items-center gap-2">
                        <span>Sort by:</span>
                        <div className="flex gap-2.5 px-3 py-2 rounded-3xl items-center border border-[#E1DFDF]">
                            <span className="font-light text-xs">Weekly</span>
                            <Image src="/arrow-down.svg" width={20} height={20}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
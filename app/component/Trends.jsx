import Image from "next/image"

export default function Trends () {
    return (
            <div className="flex border border-[#edf2f7] bg-white py-4 px-5 rounded-[14px] h-[374px] w-[60%]"> 
                <div className="flex justify-between w-full items-start">
                    <h2 className="font-bold">Sales Trend</h2>
                    <div className="flex items-center gap-2">
                        <span>Sort by:</span>
                        <div className="flex gap-2.5 px-3 py-2 rounded-3xl items-center border border-[#E1DFDF]">
                            <span className="font-light">Weekly</span>
                            <Image src="/arrow-down.svg" width={20} height={20}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
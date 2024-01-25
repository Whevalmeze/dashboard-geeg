import Image from "next/image"

export default function Trends () {
    return (
        <div>
            <div className="flex items-center justify-between bg-white py-4 px-5 rounded-[14px]"> 
                <h2>Sales Trend</h2>
                <div className="flex ">
                    <span>Sort by:</span>
                    <div className="flex gap-2.5 px-3 py-2 border border-[#E1DFDF]">
                        <span className="font-light">Weekly</span>
                        <Image src="/arrow-down.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
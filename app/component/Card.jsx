import Image from "next/image"


export default function Card ({icon, chart, title, value, isProfit, reversed }) {
    return (
        <div className="bg-white rounded-[14px] max-h-fit border w-full flex flex-col gap-2.5 p-4 border-[#edf2f7] ">
            <div>
                { reversed ?
                   <div className="flex justify-between ">
                        <Image src={chart} width={104} height={32} />
                        <div className="flex items-center justify-center w-10 h-10 border border-[] rounded-full">
                            <Image src={icon} width={24} height={24} />
                        </div>
                    </div> :
                    <div className="flex justify-between ">
                        <div className="flex items-center justify-center w-10 h-10 border border-[] rounded-full">
                        <Image src={icon} width={24} height={24} />
                        </div>
                            <Image src={chart} width={104} height={32} />
                    </div>
                }
            </div>
            <div className="flex flex-col justify-between gap-[5px]">
                <p className="text-lg text-[#898989]">{title}</p>
                <p className="text-2xl text-[#3a3451] font-semibold">{value}</p>
            </div>
            <div className="flex gap-2">
                <div className={`${isProfit ? "bg-[#e6f8f4]" : "bg-[#fcead9]" }  px-2 py-1 text-[#606060] rounded-full flex gap-1`}>
                    <Image src={`${isProfit ? "/trending-up.svg" : "/trending-down.svg"}`} width={12} height={12} />
                        <span className={`${isProfit  ? "text-[#34caa5" : "text-[#ed544e]"} text-xs`} >
                            23.5%
                        </span> 
                </div> :
                    vs. previous month
            </div>
        </div>
    )
}
import Image from "next/image"


export default function Card ({icon, chart, title, value, isProfit, reversed }) {
    return (
        <div className="bg-white rounded-md border p-4 border-[#edf2f7] ">
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
            <div className="">
                <p className="text-xl text-[#898989]">{title}</p>
                <p className="text-2xl text-[#3a3451] font-medium">{value}</p>
            </div>
            <div>
                <div className={`bg-[${isProfit? "#e6f8f4" : "#fceae9" }] rounded-xl flex gap-2`}>
                    <Image src={`${isProfit ? "/trending-up.svg" : "/trending-down.svg"}`} width={12} height={12} />
                    <span className={`text-[${isProfit} ? "#ed544e" : "#34caa5"]`}>
                        23.5%
                    </span>
                    vs. previous month
                </div>
            </div>
        </div>
    )
}
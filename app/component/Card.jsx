import Image from "next/image"


export default function Card ({icon, chart, title, value, isProfit }) {
    return (
        <div className="bg-white rounded-md border border-[#edf2f7] ">
            <div className="flex justify-between ">
                <Image src={icon} />
                <Image src={chart} />
            </div>
            <div className="">
                <p className="text-xl text-[#898989]">{title}</p>
                <p className="text-2xl text-[#3a3451] font-medium">{value}</p>
            </div>
            <div>
                <div className={`bg-[${isProfit?"#e6f8f4" : "#fceae9" }] rounded-xl `}>
                    <span className={`text-[${isProfit} ? "#ed544e" : "#34caa5"]`}>
                        23.5%
                    </span>
                    vs. previous month
                </div>
            </div>
        </div>
    )
}
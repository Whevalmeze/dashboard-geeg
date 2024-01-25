import Image from "next/image"

export default function Orders () {
    return (
            <div className="flex border border-[#edf2f7] bg-white py-4 px-5 rounded-[14px] h-[374px] w-[60%]"> 
                <div className="flex justify-between w-full items-start">
                    <h2 className="font-bold">Last Orders</h2>
                    <div className="flex items-center gap-2">
                       See all
                    </div>
                </div>
            </div>
    )
}
"use client"
import Image from "next/image"

export default function Orders () {
    const transactions = [
        {
            src: "/avatar0.png",
            name : "Marcus Benson",
            date: "Nov 15, 2023",
            amount: "$80,000",
            status: "Paid"
        },
        {
            src: "/avatar1.png",
            name : "Jaydon Varccaro",
            date: "Nov 15, 2023",
            amount: "$80,000",
            status: "Refund"
        },
        {
            src: "/avatar2.png",
            name : "Corey Schleifer",
            date: "Nov 14, 2023",
            amount: "$80,000",
            status: "Paid"
        },
        {
            src: "/avatar3.png",
            name : "Cooper Press",
            date: "Nov 14, 2023",
            amount: "$80,000",
            status: "Refund"
        },
        {
            src: "/avatar4.png",
            name : "Phillip Lubin",
            date: "Nov 13, 2023",
            amount: "$80,000",
            status: "Paid"
        },
        
    ]
    return (
            <div className="flex flex-col row-start-2 col-start-1 col-end-4 border border-[#edf2f7] bg-white py-4 px-5 rounded-[14px]"> 
                <div className="flex justify-between w-full items-start">
                    <h2 className="font-bold">Last Orders</h2>
                    <div className="flex items-center text-[#34caa5] gap-2">
                       See all
                    </div>
                </div>
                <div>
                    <table className="w-full text-left text-[#0D062D]">
                        <tr className="w-full text-[#9CA4AB]">
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Invoice</th>
                        </tr>
                        {
                            transactions.map(({src, name, date, amount, status}, index) => (
                                <tr className={`border-t border-[#edf2f6] pt-3 pb-4`} key={index}>
                                    <td><Image src={src} width={32} height={32} /></td>
                                    <td>{name}</td>
                                    <td>{date}</td>
                                    <td>{amount}</td>
                                    <td className={`${status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]" }`}>{status}</td>
                                    <td>
                                        <div className="flex gap-1">
                                            <Image src="/document-download.svg" width={16} height={16} />
                                            View
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
    )
}
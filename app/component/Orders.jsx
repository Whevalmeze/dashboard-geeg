import Image from "next/image"

export default function Orders () {
    return (
            <div className="flex border border-[#edf2f7] bg-white py-4 px-5 rounded-[14px] min-h-[374px] w-[60%]"> 
                <div className="flex justify-between w-full items-start">
                    <h2 className="font-bold">Last Orders</h2>
                    <div className="flex items-center text-[#34caa5] gap-2">
                       See all
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>Name</tr>
                            <tr>Date</tr>
                            <tr>Amount</tr>
                            <tr>Status</tr>
                            <tr>Invoice</tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Wale</td>
                                <td>Make</td>
                                <td>Paid</td>
                            </tr>
                            <tr>
                                <td>Wale</td>
                                <td>Make</td>
                                <td>Paid</td>
                            </tr>
                            <tr>
                                <td>Wale</td>
                                <td>Make</td>
                                <td>Paid</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}
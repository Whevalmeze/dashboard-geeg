import Bar from "./Bar";

export default function Platform () {
    return (
        <div className="flex flex-col bg-white dark:bg-inherit row-start-4 row-span-3 col-start-4 col-end-6 border border-[#edf2f7] gap-5 py-4 px-5 rounded-[14px]"> 
        <div className="flex text-lg justify-between w-full items-start">
            <h2 className="font-bold">Top Platforms</h2>
            <div className="flex items-center cursor-pointer text-[#34caa5] gap-2">
               See All
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <Bar color={"bg-[#6160dc]"} title={"Book Bazaar"} amount={"2,500,000"} width={"w-[40%]"} percent={15} />
            <Bar color={"bg-[#54c5eb]"} title={"Artisan Aisle"} amount={"1,800,000"} width={"w-[40%]"} percent={10} />
            <Bar color={"bg-[#ffb74a]"} title={"Toy troop"} amount={"1,200,000"} width={"w-[40%]"} percent={8} />
            <Bar color={"bg-[#ff4a55]"} title={"Xstore"} amount={"250,000,000"} width={"w-[40%]"} percent={5} />
        </div>
    </div>
    )
}
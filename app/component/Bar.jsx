export default function Bar ({color, amount, title, width, percent}) {
    // const w = `w-[${percent + 40}%]`
    return (
        <div className="flex flex-col gap-4">
            <p className="text-bol font-semibold">{title}</p>
            <div>
                <div className="w-full rounded-xl bg-[#f5f5f5] h-3">
                    <div className={`${color} ${width} h-full rounded-xl`}></div>
                </div>
            </div>
            <div className="flex justify-between">
                <div>${amount}</div>
                <div>+{percent}%</div>
            </div>
        </div>
    )
}
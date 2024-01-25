
"use client"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function Navbar () {
    const {theme, setTheme} = useTheme()
    const [greenPosition, setGreenPosition] = useState(5)
    return(
        <div className="py-5 h-dvh w-[80px] bg-[#f7f8fa] dark:bg-[#26282c] flex flex-col justify-between border-r border-r-[#ebecf2] dark:border-r[#f7f8fa]">
                 <div className="flex gap-5 flex-col justify-between items-center">
                     <Image
                      src="/logo.svg"
                      alt="Brand Logo"
                      className=""
                      width={40}
                      height={40}
                      priority
                                 />
                     
                     <div className="flex flex-col items-center gap-4">
                         <Image
                          src="/category.svg"
                          alt=""
                          className=""
                          width={24}
                          height={24}
                          priority
                                     />
                         <Image
                          src="/trend-up.svg"
                          alt=""
                          className=""
                          width={24}
                          height={24}
                          priority
                                     />
                         <Image
                          src="/profile-2user.svg"
                          alt=""
                          className=""
                          width={24}
                          height={24}
                          priority
                                     />
                         <Image
                          src="/box.svg"
                          alt=""
                          className=""
                          width={24}
                          height={24}
                          priority
                                     />
                         <Image
                          src="/discount-shape.svg"
                          alt=""
                          className=""
                          width={24}
                          height={24}
                          priority
                                     />
                         <Image
                          src="/info-circle.svg"
                          alt=""
                          className=""
                          width={24}
                          height={24}
                          priority
                                     />
                     </div>
                         <div className="bg-white p-2 flex flex-col relative items-center gap-4 rounded-full">
                            <div className={`rounded-full bg-[#34caa5] absolute w-[30px] transition-all h-[30px] top-[${greenPosition}px] z-0`}></div>
                             <Image
                              src="/brightness.svg"
                              alt=""
                              className="cursor-pointer z-10"
                              width={24}
                              height={24}
                              priority
                              onClick={()=> {setTheme("dark"); setGreenPosition(45)}}
                              />
                             <Image
                              src="/moon-1.svg"
                              alt=""
                              className="cursor-pointer z-10"
                              width={24}
                              height={24}
                              priority
                              onClick={()=> {setTheme("light"); setGreenPosition(5)}}
                              />
                         </div>
                 </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image
                      src="/arrow-right.svg"
                      alt=""
                      className=""
                      width={24}
                      height={24}
                      priority
                                 />
                     <Image
                      src="/setting-2.svg"
                      alt=""
                      className=""
                      width={24}
                      height={24}
                      priority
                                 />
                     <Image
                      src="/logout.svg"
                      alt=""
                      className=""
                      width={24}
                      height={24}
                      priority
                                 />
                 </div>
                
              
        </div>
    )
}
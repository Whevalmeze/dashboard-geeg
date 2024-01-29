
"use client"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function Navbar () {
        const {theme, setTheme} = useTheme()
        const [greenPosition, setGreenPosition] = useState(5)
        const icons =  [
                        {
                            src: "/category.svg",
                            className: "dark:invert",
                            active: true
                        },
                        {
                            src: "/trend-up.svg",
                            className: "",
                            active: false
                        },
                        {
                            src: "/profile-2user.svg",
                            className: "",
                            active: false
                        },
                        {
                            src: "/box.svg",
                            className: "",
                            active: false
                        },
                        {
                            src: "/discount-shape.svg",
                            className: "",
                            active: false
                        },
                        {
                            src: "/info-circle.svg",
                            className: "",
                            active: false
                        }
            ]
    return(
        <div className="py-5 h-dvh max-w-[80px] fixed w-full bg-[#f7f8fa] dark:bg-[#0d062d] dark:border-[#262626] hidden lg:flex flex-col justify-between border-r border-r-[#ebecf2] dark:border-r[#f7f8fa] ">
                 <div className="flex gap-7 lg:h-1/2 flex-col justify-between items-center">
                     <Image
                        src= "/logo.svg"
                        alt="Brand Logo"
                        className=""
                        width={40}
                        height={40}
                        priority
                                 />
                     
                     <div className="flex flex-col items-center gap-4">
                     {
  icons.map(({ src, className, active }, id) => (
    <div key={id} className="relative cursor-pointer">
      <Image
        src={src}
        alt="be"
        className={className}
        width={24}
        height={24}
        priority
      />
      {active ? (
        <Image
          src="/active-bar.svg"
          alt="be"
          className="absolute right-[-27px] top-[2px]"
          width={3}
          height={21}
        />
      ) : null}
    </div>
  ))
}

                        
                     </div>
                         <div className="bg-white p-2 flex flex-col relative dark:bg-[#262626] items-center gap-4 rounded-full">
                            <div className={`rounded-full ${theme === "light" ? "bg-[#34caa5]" : "bg-none"} flex items-center justify-center w-[30px] transition-all h-[30px] z-0`}>
                                <Image
                                src="/brightness.svg"
                                alt="be"
                                className={`cursor-pointer`}
                                width={24}
                                height={24}
                                priority
                                onClick={()=> {setTheme("light"); setGreenPosition(45)}}
                                />
                            </div>
                            <div className={`rounded-full ${theme !== "light" ? "bg-[#34caa5] text-white" : "bg-none"} flex items-center justify-center w-[30px] transition-all h-[30px] z-0`}>
                                <Image
                                src="/moon-1.svg"
                                alt="be"
                                className={`${theme === "light" ? "" : "invert"} cursor-pointer z-10`}
                                width={24}
                                height={24}
                                priority
                                onClick={()=> {setTheme("dark"); setGreenPosition(5)}}
                                />
                              </div>
                         </div>
                 </div>
                <div className="flex flex-col gap-4 items-center">
                     <Image
                      src="/arrow-right.svg"
                      alt="be"
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      priority
                                 />
                     <Image
                      src="/setting-2.svg"
                      alt="be"
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      priority
                                 />
                     <Image
                      src="/logout.svg"
                      alt="be"
                      className="cursor-pointer"
                      width={24}
                      height={24}
                      priority
                                 />
                 </div>
                
              
        </div>
    )
}
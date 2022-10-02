import React from "react"

export default function Header({title}){


    return (
        <div className="w-full px-[30px] flex items-center bg-orange-400 h-[50px] fixed top-0 left-0 z-[100]">
            <h1 className="text-[16px] font-bold text-gray-800 capitalize">
                {title}
            </h1>
        </div>
    )
}
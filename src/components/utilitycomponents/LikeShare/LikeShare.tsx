import { HandThumbUpIcon, ShareIcon } from "@heroicons/react/24/outline"
import { LikeShareProps, LikeShareTypes } from "./LikesShareDto"
import React from "react"
export const Likes: React.FC<LikeShareProps> = ({ main, donate }) => {
    return <>
        <div className="grid grid-cols-3 gap-4 ">
            <div className="share flex sm:text-base text-xs justify-start items-center sm:col-span-1 col-span-2">
                {main.map(ViewButton)}
            </div>
            <div  className="button md:col-span-2 col-span-1 justify-end text-center flex"><button className="bg-gray-800 rounded-md text-white hover:scale-105 duration-300 transition p-2 sm:text-base text-xs sm:w-[17.3rem]" onClick={donate.action}><span className="capitalize">{donate.type}</span> now</button></div>
        </div>
    </>
}
export const ViewButton: React.FC<{ type: LikeShareTypes, action: any, Icon?: any, num?: number }> = ({ type, action, Icon, num }) => {
    return <>
        <button key={type} onClick={action} className="bg-gray-200 p-2 mr-2 flex justify-center hover:scale-105 duration-300 transition items-center  rounded capitalize">
            {
                Icon ? <><Icon className={"w-5 mr-3 "} /></> : <SelectIons className={"w-5 mr-3 "} type={type} />
            }
            {
                type == 'likes' && <span className="mr-1">{num}</span>
            }
            {type}</button>
    </>
}

export const SelectIons: React.FC<any> = ({ type, className }) => {
    const icons: any = {
        likes: HandThumbUpIcon,
        share: ShareIcon
    }
    const CurrentIcon = icons[type satisfies LikeShareTypes]
    return <>
        <CurrentIcon className={className} />
    </>
}
import React from "react"
import { AvatarListProps } from "./AvatarListDto"

export const Avatars: React.FC<AvatarListProps> = ({title,data,num}) => {
    return <>
        <div className="flex -space-x-4">
            {
               data.map((image,index)=>(
            <img key={index} className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" title={image.name} src={image.imageURL} alt="" />
            
            ))
            }
            <a className="flex items-center justify-center px-3 h-10 text-xs font-medium text-gray-700 bg-[#e9f5ee] border-2 border-white rounded-full hover:bg-gray-400 hover:text-white dark:border-gray-800" href="#">+{num} {title}</a>
        </div>
    </>

}
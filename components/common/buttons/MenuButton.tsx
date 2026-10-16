'use client'

import { NavigationContext } from "@/context"
import { useContext } from "react"

export default function MenuButton(){

    const {isOpen,toggle} = useContext(NavigationContext)

    return (
        <button 
            className="bg-gray-200/0 size-10 flex flex-col justify-around items-center p-1 group relative @md/wrapper:size-11.25"
            data-is-open={isOpen}
            onClick={toggle}
            type="button"
        >
            <span className="w-full h-1 bg-base-300 group-hover:bg-brand-300  rounded-lg translate-x-0.75 duration-200 ease-in-out group-data-[is-open=true]:-translate-1/2 group-data-[is-open=true]:rotate-45 group-data-[is-open=true]:absolute group-data-[is-open=true]:top-1/2 group-data-[is-open=true]:left-1/2" />
            <span className="w-full h-1 bg-base-300 group-hover:bg-brand-300 rounded-lg -translate-x-0.75 duration-200 ease-in-out group-data-[is-open=true]:-translate-1/2 group-data-[is-open=true]:-rotate-45 group-data-[is-open=true]:absolute group-data-[is-open=true]:top-1/2 group-data-[is-open=true]:left-1/2" />
            <span className="w-full h-1 bg-base-300 group-hover:bg-brand-300  rounded-lg translate-x-0.75 duration-200 ease-in-out group-data-[is-open=true]:-translate-1/2 group-data-[is-open=true]:rotate-45 group-data-[is-open=true]:absolute group-data-[is-open=true]:top-1/2 group-data-[is-open=true]:left-1/2" />
        </button>
    )
}
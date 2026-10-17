import { Home } from "@/assets/icons";
import Link from "next/link";

type T_BreadcrumbItem = {
    isHome?:boolean;
    title:'Start'|string;
    uri:'/'|string;
}

function BreadcrumbItem({title = 'Start',uri = '/',isHome = false}:T_BreadcrumbItem){
    if(isHome){
        return (
            <Link className="inline-flex group items-center " href={uri} >
            <Home
            className="size-5 fill-support-400 bg-rose-500/0 duration-300 ease-in-out group-hocus:fill-support-200"
            />
            <span
            className="leading-none bg-lime-500/0 px-1 py-1.15 text-xl uppercase text-support-400 relative font-semibold after:content-[''] after:absolute after:-bottom-1  after:w-full  after:h-0.75 after:bg-support-400  after:left-0 after:origin-left after:scale-x-0 duration-300 ease-in-out after:duration-300 after:ease-in-out after:rounded-xl group-hocus:text-support-200 group-hocus:after:bg-support-200 group-hocus:after:scale-x-100"
            >
            {title}
            </span>
        </Link>
        )
    }else{
        return (
            <Link className="inline-flex group items-center " href={uri} >
            <Home
            className="size-5 fill-support-400 bg-rose-500/0 duration-300 ease-in-out group-hocus:fill-support-200"
            />
            <span
            className="leading-none bg-lime-500/0 px-1 py-1.15 text-xl uppercase text-support-400 relative font-semibold after:content-[''] after:absolute after:-bottom-1  after:w-full  after:h-0.75 after:bg-support-400  after:left-0 after:origin-left after:scale-x-0 duration-300 ease-in-out after:duration-300 after:ease-in-out after:rounded-xl group-hocus:text-support-200 group-hocus:after:bg-support-200 group-hocus:after:scale-x-100"
            >
            {title}
            </span>
        </Link>
        )
    }
    
}

export default function Breadcrumbs(){
    return (
        <div>
            <BreadcrumbItem title="Start" uri="/" isHome/>
            <BreadcrumbItem title="Realizacje" uri="/"/>
            <BreadcrumbItem title="Agromar" uri="/"/>
        </div>
    )
}
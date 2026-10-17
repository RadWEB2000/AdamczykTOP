import Link from "next/link";
import logo from "@/img/me/logo.png"
import Image from "next/image";

export default function Brand(){
    return (
        <Link className="inline-flex items-center" href="/" >
            <Image
                alt="Logo - Radosław Adamczyk"
                className="size-13 invert @md/wrapper:size-14  @2xl2/wrapper:size-14.5 @2xl5/wrapper:size-17"
                {...logo}
            />
            <span className="text-base-100 font-extrabold text-3xl leading-none  @md/wrapper:text-4xl  @2xl2/wrapper:text-5xl @2xl5/wrapper:text-6xl" >Adamczyk<span className="text-brand-400 font-black">TOP</span></span>
        </Link>
    )
}
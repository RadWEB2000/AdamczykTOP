'use client'
import { NavigationContext } from "@/context";
import Link, { type LinkProps } from "next/link";
import { useContext } from "react";

type menuItem = LinkProps & {
    label:string;
}

export default function MenuItem({label,...props}:menuItem){

    const {close} = useContext(NavigationContext);

    return (
        <Link className="uppercase font-semibold text-base-200 duration-200 ease-in-out hover:text-brand-200 text-4xl @lg4/wrapper:text-base @2xl2/wrapper:text-lg @2xl5/wrapper:text-xl" onClick={close} {...props}>
            {label}
        </Link>
    )
}
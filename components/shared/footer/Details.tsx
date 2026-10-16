import { Location, Mail, Phone } from "@/assets/icons";
import Link from "next/link";
import { cloneElement, type ReactElement } from "react";

const contactItems:Array<{
    title:string;
    icon:ReactElement<{className?:string}>;
    href:string;
}> = [
    {
        href:'tel:+48794100413',
        icon:<Phone/>,
        title:'+48 794-100-413'
    },
    {
        href:'mailto:kontakt@adamczyk.top',
        icon:<Mail/>,
        title:'kontakt@adamczyk.top'
    },
    {
        href:'#',
        icon:<Location/>,
        title:'Donatowo 53, 64-020 Czempiń'
    },
]

export default function Details(){
    return (
        <div
            className="@container/details"
        >
            <hgroup
                className="*:leading-none gap-y-3 flex flex-col"
            >
                <h3 className="text-4xl-plus text-base-100 font-bold @sm2/details:text-6xl @lg3/wrapper:text-9xl!">AdamczykTOP</h3>
                <h4 className="text-lg text-base-200 font-semibold  @sm2/details:text-2xl @lg3/wrapper:text-4xl!" >Radosław Adamczyk</h4>
            </hgroup>
            <address
                className="not-italic flex flex-col gap-y-3 mt-4 @lg3/wrapper:mt-8"
            >
                {
                    contactItems.map(({href,icon,title}) => {
                        return (
                            <Link className="items-center gap-x-2 group *:duration-200 *:ease-in-out grid grid-cols-[20px_auto] @lg3/wrapper:grid-cols-[70px_auto]!" href={href}>
                                {cloneElement(icon,{
                                    className:'size-5 fill-support-200 shrink-0 group-hocus:fill-brand-200  @sm2/details:size-5.5  @lg3/wrapper:size-8!'
                                })}
                                <span className="text-support-200 text-sm font-medium group-hocus:text-brand-200  @sm2/details:text-base  @lg3/wrapper:text-lg  @2xl4/wrapper:text-xl">{title}</span>
                            </Link>
                        )
                    })
                }
            </address>
        </div>
    )
}
import { Seo } from "@/assets/icons";
import Link from "next/link";
import { cloneElement, type ReactElement } from "react";


type T_ServiceCardHome = {
    icon:ReactElement<{className?:string}>;
    title:string;
    index?:number;
    description:string;
    tags:Array<string>;
}

const card:T_ServiceCardHome = {
    title:'Audyty i strategia SEO',
    description:`Analizuję kondycję witryny, konkurencję i potencjał rynku. Identyfikuję problemy, wyznaczam priorytety i tworzę strategię dopasowaną do celów biznesowych.`,
    tags:['Audyt SEO','Keyword research','Analiza konkurencji','Strategia pozycjonowania'],
    icon:<Seo/>,
    index:1
}

export default function ServiceCardHome(){
    return (
        <Link
            className="grid grid-cols-[1fr_3fr] rounded-sm overflow-clip gap-y-3 items-center group bg-linear-to-b from-base-500/3 to-transparent @container/wrapper @md2/cards:grid-cols-[12rem_1fr]"
            href="#"
        >
            <div
                className="col-span-full relative h-0.5 @lg1/wrapper:h-1.5"
            >
                <span className="absolute top-0 left-0 size-full bg-base-500/15" />
                <span className="absolute top-0 left-0 size-full bg-brand-300 scale-x-0 origin-left group-hocus:scale-x-100 duration-400 ease-in-out" />
            </div>
            {
                cloneElement(card.icon, {
                    className:'size-15 fill-brand-200 duration-400 mx-auto @sm/wrapper"size-20 @md2/wrapper:size-[75%] @lg1/wrapper:size-[89%]! group-hocus:fill-brand-400'
                })
            }
            <section
                className="mb-2 @container/content pr-2 @lg1/wrapper:mb-6 @lg1/wrapper:mt-6 @lg1/wrapper:pr-7"
            >
                <span
                    className="*:inline *:align-middle text-xl text-balance font-semibold leading-none @xs2/content:text-3xl @sm/content:text-4xl @md2/content:text-6xl uppercase "
                >
                    {
                        card.index &&
                        <span>{card.index < 10 ? `0${card.index} ` : `${card.index} `}</span>
                    } 
                    <h3>{card.title}</h3>
                </span>
                <p
                    className="text-xs line-clamp-3 text-pretty text-base-300 mt-1 @xs2/content:text-sm @sm/content:text-base @md2/content:mt-3  @md2/content:text-lg"
                >
                    {card.description} 
                </p>
                {
                    card.tags &&
                    <ul
                        className="flex items-start justify-start flex-wrap gap-x-2 mt-2 @md2/content:mt-5"
                    >
                        {
                            card.tags.map((item) => {
                                return (
                                    <li className="text-2xs text-support-400 font-semibold @xs2/content:text-xs @sm/content:text-sm @md2/content:text-lg" key={`tag-${item}`} >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </section>
        </Link>
    )
}
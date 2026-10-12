import Link from "next/link";
import project_1 from "@/img/projects/centrumzoliborz.webp";
import project_2 from "@/img/others/winter-holidays.jpg"
import Image, { type ImageProps } from "next/image";
import { Website } from "@/assets/icons";

type ProjectCardHome = {
    image: {
        featured:ImageProps;
        preview:ImageProps;
    };
    title:string;
    company:string | 'Klient poufny' | 'Klient anonimowy' | 'Projekt własny';
    description:string;
    services:Array<string>;
}


export default function ProjectCardHome(){
    return (
        <Link className="group w-[min(950px,87vw)] block @container/wrapper " href="#" >
            <figure
                className="relative w-full aspect-16/10 *:absolute *:size-full *:object-cover z-0 overflow-hidden *:img-better! rounded-xl"
            >
                <Image
                    alt="Project"
                    className="-z-1"
                    {...project_1}
                />
                <Image
                    alt="Project 2"
                    className="z-1 duration-300 transition-all ease-in-out group-hocus:opacity-0 group-hocus:invisible group-hocus:scale-105"
                    {...project_2}
                />
            </figure>
            <div
                className="flex flex-col @sm4/wrapper:grid grid-cols-[4fr_2fr] gap-x-3 p-3 gap-y-0.5 @container/content"
            >
                <hgroup
                    className="order-2 text-balance @sm4/wrapper:col-span-full"
                >
                    <h3
                        className="text-2xl font-bold col-start-1 row-start-1 col-end-2 bg-lime-300/285 text-base-100 mr-1 @sm1/content:text-4xl @md2/content:text-5xl uppercase @md5/content:text-5xl-plus"
                        >Wynajem przestrzeni biurowych</h3>
                    <p className="inline-flex items-center text-balance text-sm leading-none mt-2 text-brand-200 @sm1/content:text-base uppercase font-medium @md2/content:text-lg" ><Website className="inline place-content-center size-3 mr-px fill-brand-200  @sm1/content:size-4  @sm1/content:mr-1 @md2/content:size-5" />Klient anonimowy</p>
                </hgroup>
                <p
                    className="line-clamp-2 text-sm text-base-400 col-start-1 order-3 @sm1/content:text-base  @md5/content:line-clamp-3"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium veniam consectetur dolor error porro repellat, rerum facilis debitis nulla ipsa minima molestiae amet! Commodi similique totam fuga numquam. Nihil.
                </p>
                <ul
                    aria-label="Zakres realizacji"
                    className="col-start-2 row-start-2 row-end-3 flex items-start justify-start gap-1.5 flex-wrap mb-2 order-1 @sm4/wrapper:justify-end  @sm4/wrapper:items-end"  
                >
                    <li
                        className="bg-support-200 text-support-700 leading-none uppercase font-extrabold font-mono py-1.25 px-3 text-xs rounded-xl ring-support-700 ring-2 @sm1/content:text-base @md5/content:text-xl"
                    >SEO</li>
                    <li
                        className="bg-support-200 text-support-700 leading-none uppercase font-extrabold font-mono py-1.25 px-3 text-xs rounded-xl ring-support-700 ring-2 @sm1/content:text-base @md5/content:text-xl"
                    >WWW</li>
                </ul>
            </div>
        </Link>
    )
}
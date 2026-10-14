import type { ImageProps } from "next/image"
import Link from "next/link";
import article_img from "@/img/others/laptop.webp"
import Image from "next/image";
import { Calendar } from "@/assets/icons";


type articleCardHome = {
    image:ImageProps;
    title:string;
    category:string;
    variant:'Wiedza'|'News',
    uri:string;
    release:string;
}

export default function ArticleCardHome(){
    return (
        <Link className="group duration-300 ring-0 ring-support-700/95 ease-in-out 2xl4:hocus:ring-5 hocus:ring-4 rounded-lg p-2.5 w-full @container/card" href="#">
            <article
                className=""
            >
                <figure
                    className="relative w-full aspect-16/10 rounded-lg overflow-hidden"
                >
                    <Image
                        alt="Wpis blogowy"
                        className="size-full object-cover object-center img-better group-hocus:scale-105 duration-300 ease-in-out"
                        {...article_img}
                    />
                </figure>
                <div
                    className="space-y-1 mt-3"
                >
                    <h3
                        className="text-xl text-balance font-extrabold @xs2/card:text-3xl @sm1/card:text-4xl @md1/card:text-5xl-plus @sm/card:text-5xl"
                    >Uses of Automation & AI: Streamlining Volume Hiring</h3>
                    <p
                        className="line-clamp-2 text-base-300 text-xs text-pretty @xs2/card:text-sm @sm1/card:text-base  @sm/card:text-lg  @sm/card:mt-2"
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam beatae labore quisquam a deleniti, soluta maiores aliquam! Illo suscipit, sint, dicta aut voluptatem quam, autem a dignissimos deserunt tempora animi?
                    </p>
                    <div
                        className="inline-flex flex-wrap items-center justify-start gap-1 bg-sky-70 w-full mt-2 @sm1/card:mt-3"
                    >
                            <span className="uppercase text-xs font-semibold bg-support-300 text-black leading-none py-1.25 rounded-sm px-2 @xs2/card:text-sm  @sm/card:text-lg  @sm/card:py-2  @sm/card:px-3" >Wiedza</span>
                            <span className="uppercase text-xs font-semibold bg-support-200 text-black leading-none py-1.25 rounded-sm px-2 @xs2/card:text-sm   @sm/card:py-2  @sm/card:px-3 @sm/card:text-lg" >Programowanie</span>
                        <time className="inline-flex items-center w-fit ml-auto gap-x-0.5" dateTime="">
                            <Calendar className="size-4 fill-support-300 @xs2/card:size-5 @sm1/card:size-6  @sm/card:size-7" />
                            <span className="text-xs uppercase font-semibold text-support-300 @xs2/card:text-sm @sm1/card:text-base @sm/card:text-lg" >21 kwi 2026</span>
                        </time>
                    </div>
                </div>
            </article>
        </Link>
    )
}
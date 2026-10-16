import { Facebook, Instagram } from "@/icons/socials";
import Link from "next/link";

const socials = [
    'youtube',
    'github',
    'facebook',
    'tiktok',
    'instagram'
]

export default function Socials(){
    return (
        <div
            className="flex items-center justify-center gap-x-2 *:shrink-0 row-start-1 @container/socials @lg3/wrapper:col-start-3 @lg3/wrapper:row-start-1  @2xl5/wrapper:gap-x-4 @lg3/wrapper:justify-end"
        >
            {
                socials.map(() => {
                    return (
                        <Link className="inline-flex items-center group *:duration-300 *:ease-in-out "  href="#" >
                            <Instagram
                                className="size-6 fill-support-300 group-hocus:fill-support-200 @sm2/socials:size-7 @2xl2/wrapper:size-8 @2xl5/wrapper:size-9
                                "
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}
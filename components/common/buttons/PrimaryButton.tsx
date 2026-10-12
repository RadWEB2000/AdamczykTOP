import { Arrow } from "@/assets/icons";
import Link, { type LinkProps } from "next/link";

type Props = LinkProps & {
    label:string;
}

export default function PrimaryButton({label,...props}:Props){
    return (
        <Link className="inline-flex items-center gap-x-3 py-2 px-4 rounded-xl ring-2 bg-support-900 ring-support-800 duration-200 ease-in-out hocus:ring-support-600 hocus:bg-support-800 hocus:scale-102 group active:scale-95! @2xl3/buttons:px-6 @2xl3/buttons:py-4 @md3/buttons:py-3 @md-plus/buttons:bg-orange-400!"  {...props} >
            <span
                className="font-mono uppercase leading-none font-bold text-nase text-support-200 group-hocus:text-base-100 duration-200 ease-in-out @md3/buttons:text-xl @2xl3/buttons:text-3xl"
            >
                {label}
            </span>
            <Arrow
                className="size-5 @md3/buttons:size-6 @2xl3/buttons:size-7 fill-support-200 group-hocus:fill-base-100 group-hocus:-rotate-45 duration-200 ease-in-out"
            />
        </Link>
    )
}
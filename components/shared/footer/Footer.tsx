import {Author, Cities, Details, Menu, Policies, Socials} from "@/shared/footer";
import Link from "next/link";

export default function Footer(){
    return (
        <footer
            className="pt-10 pb-5 bg-[color-mix(in_srgb,var(--color-stone-950),var(--color-black))] @container/wrapper 2xl2:pt-20 2xl2:pb-15 2xl2:space-y-8"
        >
            {/* grid-cols-[1.25fr_3fr] */}
            <div className="hero-width mx-auto grid gap-y-4 @container/main @md/wrapper:gap-y-12 @lg5/wrapper:grid-cols-[1.25fr_3fr] @2xl2/wrapper:grid-cols-[1.75fr_3fr]">
                <Details/>
                <Menu/>
            </div>
            <Cities/>
            {/* grid-cols-[2fr_3fr_2fr] */}
            <div
                className="hero-width mx-auto grid gap-y-3 @container/support @lg3/wrapper:grid-cols-3"
            >
                <Policies/>
                <Author/>
                <Socials/>
            </div>
        </footer>
    )
}
import { PrimaryButton } from "@/common/buttons";
import Image from "next/image";
import me from "@/img/me/suit-03.webp"
import {Statistics} from "@/views/home-view";

export default function About(){
    return (
        <div
            className="section-width grid gap-x-3 gap-y-6 mx-auto items-center @container/wrapper md3:grid-cols-[2.5fr_3fr] lg4:grid-cols-[2.5fr_2fr_1fr] xl3:grid-cols-[3fr_3fr_1.5fr]"
        >
            <section
                className="@container/content row-start-3 @md/wrapper:col-start-1  @md/wrapper:row-start-1 @lg3/wrapper:row-end-3"
            >
                <hgroup className="flex flex-col *:text-balance *:leading-none">
                    <h2 className="order-2 text-5xl-plus uppercase font-bold @xl2/wrapper:text-7xl-plus @xl3/wrapper:text-9xl @2xl2/wrapper:text-10xl">Specjalista SEO</h2>
                    <h3 className="order-1 text-lg text-brand-400 mb-2 @xl2/wrapper:text-xl @xl3/wrapper:text-3xl @2xl2/wrapper:text-4xl">O mnie</h3>
                </hgroup>
                <p
                     className="@xl2/wrapper:col-start-2 @xl2/wrapper:row-start-1 @xl2/wrapper:row-end-3 text-sm max-w-[75ch] leading-loose text-pretty text-base-300  @xl2/wrapper:text-base @xl3/wrapper:text-lg  @2xl2/wrapper:text-xl"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto perferendis, autem, recusandae illum unde ipsum debitis ipsa incidunt suscipit repellendus consequuntur doloribus dolorum rem hic! Asperiores corrupti velit iure ut!
                </p>
                <div
                    className="@container/buttons mt-6 w"
                >
                    <PrimaryButton label="Poznaj mnie" href="#" />
                </div>
            </section>
            <figure
                className="relative z-0 row-start-2 @md/wrapper:col-start-2 @md/wrapper:row-start-1 @md/wrapper:row-end-3"
            >
                <Image
                    alt="asd"
                    className="z-1 size-full scale-105 origin-bottom drop-shadow-2xl img-better"
                    {...me}
                />
                <span
                    className="-z-1 size-full bg-linear-to-b from-brand-300 to-brand-400 block bottom-0 absolute origin-bottom scale-95 rounded-xl"
                />
            </figure>
           <Statistics/>
        </div>
    )
}
import { PrimaryButton } from "@/common/buttons";
import { ServiceCardHome as Card} from "@/common/cards";

export default function Services(){
    return (
        <div className="bg-base-600 my-20 py-10 space-y-6 @container/wrapper 2xl2:mt-[15vh]! 2xl2:py-25">
            <div className="section-width mx-auto  @lg1/wrapper:grid  @lg1/wrapper:grid-cols-[2.5fr_3fr] relative gap-y-12 gap-x-6">
                <section className="@lg1/wrapper:sticky h-fit @lg1/wrapper:top-30 @container/content">
                    <hgroup
                         className="flex flex-col *:text-balance *:leading-none"
                    >
                        <h2 className="order-2 text-5xl-plus uppercase font-bold @xl2/wrapper:text-7xl-plus @xl3/wrapper:text-9xl @2xl2/wrapper:text-10xl">Oferta SEO</h2>
                        <h3 className="order-1 text-lg text-brand-400 mb-2 @xl2/wrapper:text-xl @xl3/wrapper:text-3xl @2xl2/wrapper:text-4xl" >Jak mogę Tobie pomóc?</h3>
                    </hgroup>
                    <p
                        className="@xl2/wrapper:col-start-2 @xl2/wrapper:row-start-1 @xl2/wrapper:row-end-3 text-sm max-w-[75ch] leading-loose text-pretty text-base-300  @xl2/wrapper:text-base @xl3/wrapper:text-lg  @2xl2/wrapper:text-xl"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem accusantium repellat hic modi! Non molestiae iure, odio animi tempore voluptatem cum eos placeat? Magnam quo odio error sapiente officiis repudiandae.
                    </p>
                    <div className="@container/buttons mt-10" >
                        <PrimaryButton
                            href="#"
                            label="Pełna oferta SEO"
                        />
                    </div>
                </section>
                <ul className="grid grid-cols-1 gap-y-4 @max-lg1/wrapper:mt-5 @container/cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
            </div>
        </div>
    )
}
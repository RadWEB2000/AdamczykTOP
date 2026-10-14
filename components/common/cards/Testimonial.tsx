import { Poland } from "@/icons/flags"
import customer from "@/img/testimonials/aleksandra-sniezek-portrait.webp"
import Image from "next/image"

export default function Testimonial(){
    return (
        <div
            className="w-[min(560px,82vw)] testimonial-card p-6 bg-fixed rounded-lg @container/card 2xl1:p-9"  
        >
            <section>
                <p
                    className="text-lg leading-relaxed text-pretty @2xs/card:text-xl @sm1/card:text-3xl"
                >As his wife, I was basically recruited to write this. But I'll admit, the website Marcus built for my English school looks amazing, brought in new students and my clients love it. Okay, you earned it.</p>
            </section>
            <aside
                className="inline-flex flex-wrap w-full items-center mt-6 p-0 gap-x-1 2xl1:gap-x-4"
            >
                <Image
                    alt="Custoemr"
                    className="size-15 object-cover object-center rounded-lg shrink-0  @2xs/card:size-17 @sm1/card:size-21"
                    {...customer}
                    height={225}
                    decoding="auto"
                    width={225}
                />
                <hgroup
                    className="*:leading-none space-y-1 *:text-balance "
                >
                    <h4
                        className="text-lg font-bold @sm1/card:text-2xl"
                    >Sandra Vergani Dall Agnol</h4>
                    <h5
                        className="text-sm inline-flex align-middle items-center @sm1/card:text-lg"
                    >Online School Owner  <Poland
                    className="size-5 ml-1 @sm1/card:size-7 2xl1:ml-3"
                />
                    
                    </h5>
                </hgroup>
                
            </aside>
        </div>
    )
}
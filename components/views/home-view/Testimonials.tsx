import { Arrow } from "@/assets/icons";
import { Testimonial } from "@/common/cards";

export default function Testimonials(){
    return (
        <div
            className="mt-[10vh]"
        >
            <section
                className="section-width mx-auto text-center"
            >
                <h2
                    className="order-2 text-5xl-plus uppercase font-bold @xl2/wrapper:text-7xl-plus @xl3/wrapper:text-9xl @2xl2/wrapper:text-10xl"
                >Opinie i rekomendacje</h2>
            </section>
            <div
                className="overflow-x-clip mt-10 bg-blue-300/0 z-0 relative"
            >
                <div
                    className="items-center px-5 justify-center flex flex-row flex-nowrap *:shrink-0 overflow-x-scroll scrollbar-none gap-x-5 scroll-"
                >   
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5 *:shrink-0 gap-2">
                <button
                    className="bg-support-300 group size-14 flex items-center justify-center rounded-lg duration-200 ease-in-out hover:bg-support-200 active:scale-95"
                >
                    <Arrow
                        className="size-8 fill-support-800 rotate-180 duration-200 ease-in-out group-hover:scale-110"
                    />
                </button>
                <button
                    className="bg-support-300 group size-14 flex items-center justify-center rounded-lg duration-200 ease-in-out hover:bg-support-200 active:scale-95"
                >
                    <Arrow
                        className="size-8 fill-support-800 duration-200 ease-in-out group-hover:scale-110"
                    />
                </button>
            </div>
        </div>
    )
}
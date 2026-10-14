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
                <h2>Opinie i rekomendacje</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi esse recusandae officia doloribus, dolorum ea possimus temporibus repellat aperiam ipsam minus commodi voluptatibus voluptate, mollitia eaque reiciendis eveniet earum.</p>
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
import { FaqList } from "@/common/utils";

export default function Faq(){
    return (
        <div className="section-width mx-auto grid gap-y-10 xl:grid-cols-[3fr_4fr] gap-x-3 mt-[10vh] @container/wrapper 2xl5:gap-x-18">
            <section
                className="bg-orange-800/0 @container/content"
            >
                <hgroup
                    className="flex flex-col *:text-balance *:leading-none"
                >
                    <h2
                        className="order-2 text-5xl-plus uppercase font-bold @xl2/wrapper:text-7xl-plus "
                    >Często zadawane pytania</h2>
                    <h3
                        className="order-1 text-lg text-brand-400 mb-2 @xl2/wrapper:text-xl @xl3/wrapper:text-3xl"
                    >Klienci pytają nas o</h3>
                </hgroup>
                <p
                    className="@xl2/wrapper:col-start-2 @xl2/wrapper:row-start-1 @xl2/wrapper:row-end-3 text-sm max-w-[75ch] leading-loose text-pretty text-base-300  @xl2/wrapper:text-base @xl3/wrapper:text-lg  @2xl2/wrapper:text-xl mt-3"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, laborum? Dignissimos, saepe fuga distinctio quibusdam labore cumque rerum iusto aspernatur, aliquid omnis beatae error vero est nihil ullam reprehenderit repellat?
                </p>
            </section>
            <div
                className="space-y-3 bg-green-500/0"
            >
                <FaqList/>
            </div>
        </div>
    )
}
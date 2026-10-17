import { Breadcrumbs } from "@/common/utils";

export default function Hero(){
    return (
        <header
            className="min-h-[65vh] bg-[color-mix(in_srgb,var(--color-stone-950),var(--color-black))] pt-26 pb-3"
        >
            <section className="hero-width mx-auto ">
                <Breadcrumbs/>
                <hgroup
                    className="*:leading-none *:uppercase"
                >
                    <h1
                        className="text-13xl font-extrabold"
                    >Agromar</h1>
                    <h2
                        className="text-6xl font-semibold text-base-300"
                    >Smakowite warzywa mrożone</h2>
                </hgroup>
                <strong
                    className="mt-5 block text-2xl text-balance max-w-[75ch]"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt voluptas molestiae quidem ex nihil quibusdam odio sed doloribus, tempora corrupti natus asperiores fugiat a quaerat deleniti, eveniet ipsum quia.
                </strong>
            </section>
        </header>
    )
}
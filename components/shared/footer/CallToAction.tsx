import { PrimaryButton } from "@/components/common/buttons";

export default function CallToAction(){
    return (
        <div
            className="bg-brand-400 min-h-[33vh] place-content-center py-[6vh]"
        >
            <section className="section-width bg-sky-300/0 m-auto @container/content">
                <hgroup
                    className="*:leading-none space-y-2"
                >
                    <h2
                        className="text-xl font-semibold uppercase text-support-700 @sm4/content:text-3xl @lg2/content:text-5xl @xl3/content:text-6xl"
                    >Porozmawiajmy o SEO</h2>
                    <h3
                        className="uppercase font-extrabold text-base-700 text-4xl text-balance @sm4/content:text-7xl @lg2/content:text-9xl @xl/content:text-10xl-plus @xl3/content:text-11xl"
                    >Dobre SEO zaczyna się od dobrej rozmowy</h3>
                </hgroup>
                <div
                    className="@container/buttons mt-5 @lg2/content:mt-10 @xl3/content:mt-14"
                >
                    <PrimaryButton
                        label="Rozpocznijmy współpracę"
                        href="#"
                    />
                </div>
            </section>
        </div>
    )
}
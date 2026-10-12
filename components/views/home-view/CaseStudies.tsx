import { PrimaryButton } from "@/common/buttons";
import { ProjectCardHome as Card} from "@/common/cards";

export default function CaseStudies(){
    return (
        <div
            className="overflow-x-clip 2xl:mt-[15vh]!"
        >
            <div
                className="section-width mt-20 mx-auto @container/wrapper"
            >
                <section
                    className="grid @xl2/wrapper:grid-cols-[3fr_3.5fr] gap-y-3 gap-x-1 *:h-fit @container/content"
                >
                    <hgroup
                        className="flex flex-col *:text-balance *:leading-none"
                    >
                        <h2 className="order-2 text-5xl-plus uppercase font-bold @xl2/wrapper:text-7xl-plus @xl3/wrapper:text-9xl @2xl2/wrapper:text-10xl" >Case studies</h2>
                        <h3 className="order-1 text-lg text-brand-400 mb-2 @xl2/wrapper:text-xl @xl3/wrapper:text-3xl @2xl2/wrapper:text-4xl" >Projekty i realizacje SEO</h3>
                    </hgroup>
                    <p
                        className="@xl2/wrapper:col-start-2 @xl2/wrapper:row-start-1 @xl2/wrapper:row-end-3 text-sm max-w-[75ch] leading-loose text-pretty text-base-300  @xl2/wrapper:text-base @xl3/wrapper:text-lg  @2xl2/wrapper:text-xl"
                    >
                        Nie pokazuję wyłącznie pozycji w Google ani wykresów, które dobrze wyglądają w raportach. Pokazuję przede wszystkim, jakie problemy rozwiązałem, jakie działania wdrożyłem i jakie rezultaty udało się dzięki nim osiągnąć. Każdy projekt to inne wyzwania, indywidualne potrzeby biznesowe i konkretna strategia dopasowana do celów klienta. Od analizy i planowania, przez optymalizację techniczną i rozwój treści, aż po budowanie widoczności i analizę efektów. W moich case studies znajdziesz nie tylko końcowe wyniki, ale również proces, decyzje i rozwiązania, które za nimi stoją. Bo skuteczne SEO to nie przypadkowe wzrosty, lecz przemyślane działania, których wartość można zmierzyć i zweryfikować.
                    </p>
                    <div className="@container/buttons" >
                        <PrimaryButton
                            href="#"
                            label="Wszystkie realizacje"
                        />
                    </div>
                </section>
            </div>
            <div
                className="hero-width mx-auto mt-10 @container/cards 2xl2:mt-22"
            >
                <div
                    className="inline-flex items-start justify-start gap-2 *:shrink-0 overflow-x-visible @xl4/cards:gap-x-7"
                >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
    </div>
    )
}
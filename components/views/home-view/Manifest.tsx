type Manifest = {
    title:string;
    content:string;
    disclaimer:string;
}

const manifest:Manifest = {
    content:`Skuteczne SEO to nie zbiór przypadkowych działań. To przemyślana strategia, w której technologia, treści i autorytet pracują na jeden cel - rozwój Twojego biznesu.`,
    disclaimer:`Jedna strategia. Pełen sukces.`,
    title:'Moja misja'
}

export default function Manifest(){
    return (
        <section
            className="section-width mx-auto md3:grid md3:grid-cols-[1fr_2.25fr] gap-y-2 gap-x-1 @container/wrapper 2xl2:mt-[7vh]! 2xl2:mb-[25vh]!"
        >
            <h2
                className="font-mono font-semibold uppercase text-lg text-brand-500 @md3/wrapper:text-2xl @lg3/wrapper:text-3xl @xl3/wrapper:text-4xl-plus"
            >
                {manifest.title}
            </h2>
            <p
                className="col-start-2 text-5xl-plus text-balance leading-none font-bold text-base-600 first-line:text-base-100 @md3/wrapper:text-6xl @lg3/wrapper:text-7xl @xl3/wrapper:text-9xl"
            >
                {manifest.content}
            </p>
            <span
                className="col-start-2 text-support-300 text-base mt-3 font-medium @md3/wrapper:text-lg @lg3/wrapper:text-2xl @xl3/wrapper:text-3xl"
            >{manifest.disclaimer}</span>
        </section>
    )
}
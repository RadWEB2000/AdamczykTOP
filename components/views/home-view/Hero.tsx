import Image, { type ImageProps } from "next/image";
import me from "@/img/me/hero-dark.webp";
import { PrimaryButton } from "@/common/buttons";

type Hero = {
    title:string;
    subtitle:string;
    content:string;
    image:ImageProps;
    buttons:Array<{
        href:string;
        label:string;
    }>
}

const hero:Hero = {
    title:'Strategia, treści i techniczne SEO. Jeden specjalista. Jeden spójny plan.',
    subtitle:'SEO dla ambitnych firm',
    content:`Zajmuję się SEO kompleksowo – od strategii i treści po techniczną optymalizację i link building. Bez pośredników, rozproszonej odpowiedzialności i działań na ślepo. Bezpośrednio współpracujesz ze specjalistą, który zna Twój biznes i odpowiada za cały proces.`,
    buttons:[
        {
            label:'Poznaj ofertę',
            href:'/'
        },
        {
            label:'Sprawdź realizacje',
            href:'/'
        },
    ],
    image:{...me, alt:'Radosław Adamczyk - Specjalista SEO'}
}

export default function Hero(){
    return (
        <header
            className="bg-[color-mix(in_srgb,var(--color-support-100),var(--color-base-100))] text-base-700 relative z-0 overflow-clip"
        >
            <Image
                className="absolute size-full object-cover -z-1 scale-100 origin-bottom"
                {...hero.image}
            />

            <section
                className="min-h-[97vh] z-1 text-white pt-10 bg-orange-800/174 flex flex-col items-start justify-end pb-[7vh]  mx-auto px-4 @container/wrapper hero-width"
            >
                <hgroup
                    className="flex flex-col *:leading-none"
                >
                    <h1
                        className="font-extrabold order-2 text-5xl text-balance text-brand-100 uppercase @sm/wrapper:text-7xl @lg1/wrapper:text-7xl-plus @lg5/wrapper:text-8xl-plus @xl4/wrapper:text-10xl @xl5/wrapper:text-11xl @2xl4/wrapper:text-12xl-plus"
                    >{hero.title}</h1>
                    <h2
                        className="font-bold uppercase text-xl text-brand-300 mb-4  @sm/wrapper:text-2xl @lg1/wrapper:text-4xl @lg5/wrapper:text-5xl @xl4/wrapper:text-6xl  @2xl3/wrapper:text-7xl"
                    >{hero.subtitle}</h2>
                </hgroup>
                <strong
                    className="text-pretty text-sm mt-3 max-w-[75ch] font-medium text-base-400 @sm/wrapper:text-base @lg1/wrapper:text-lg @lg5/wrapper:text-xl @xl4/wrapper:text-2xl  @2xl3/wrapper:text-4xl  @2xl3/wrapper:leading-snug" 
                >
                   {hero.content}
                </strong>
                {
                    hero.buttons &&
                    <div className="flex items-center flex-wrap justify-start gap-3 @xl4/wrapper:mt-8 mt-6  @2xl3/wrapper:gap-8 @container/buttons w-full">
                        {
                            hero.buttons.map(({...item}) => {
                                return (
                                    <PrimaryButton
                                        {...item}
                                        key={`hero-button-${item.label}`}
                                    />
                                )
                            })
                        }
                    </div>
                }
            </section>
        </header>
    )
}
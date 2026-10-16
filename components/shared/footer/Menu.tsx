import Link from "next/link";

type menuElement =  {
    title:string;
    items:Array<{
        label:string;
        uri:string;
    }>
}

const menu:Array<menuElement> = [
    {
        title:'Odkrywaj',
        items:[
            {
                label:'Strona główna',
                uri:'#'
            },
            {
                label:'O mnie',
                uri:'#'
            },
            {
                label:'Projekty i realizacje',
                uri:'#'
            },
            {
                label:'Oferta',
                uri:'#'
            },
            {
                label:'Blog',
                uri:'#'
            },
            {
                label:'Kontakt',
                uri:'#'
            },
        ]
    },
    {
        title:'Usługi SEO',
        items:[
            {
                label:'Audyty i strategia',
                uri:'#'
            },
            {
                label:'Techniczne SEO',
                uri:'#'
            },
            {
                label:'Content marketing',
                uri:'#'
            },
            {
                label:'Link building',
                uri:'#'
            },
            {
                label:'Integracje i automatyzacje',
                uri:'#'
            },
            {
                label:'Analityka SEO',
                uri:'#'
            },
        ]
    },
    {
        title:'Wiedza & media',
        items:[
            {
                label:'Aktualności',
                uri:'#'
            },
            {
                label:'Poradniki',
                uri:'#'
            },
            {
                label:'Baza wiedzy',
                uri:'#'
            },
            {
                label:'Z życia firmy',
                uri:'#'
            },
            {
                label:'Wideo i YouTube',
                uri:'#'
            },
            {
                label:'Pytania i odpowiedzi',
                uri:'#'
            },
        ]
    },
]

export default function Menu(){
    return (
        <menu
            className="grid grid-cols-1 bg-lime-600/0 gap-x-1 @container/menu gap-y-3 @sm2/wrapper:gap-y-5 @md/wrapper:grid-cols-3"
        >
            {
                menu.map(({items,title}) => {
                    return (
                        <div
                            className="bg-green-800/0"
                        >
                            <h5
                                className="font-mono font-bold uppercase text-support-300 text-lg @sm2/menu:text-2xl @2xl2/wrapper:text-3xl @xl/menu:text-4xl"
                            >{title}</h5>
                            <div
                                className="grid grid-cols-2 mt-2 gap-y-2 gap-x-1.25 @md/menu:grid-cols-1  @2xl2/wrapper:mt-3 @xl/menu:mt-6"
                            >
                                {
                                    items.map(({label,uri}) => {
                                        return (
                                            <Link
                                                className="uppercase text-xs text-base-300 text-balance duration-200 ease-in-out hocus:text-base-100 font-medium @sm2/menu:text-sm  @2xl2/wrapper:text-base @xl/menu:text-lg"
                                                href={uri}
                                                key={`footer-menu-item-${label}`}
                                            >
                                                {label}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </menu>
    )
}
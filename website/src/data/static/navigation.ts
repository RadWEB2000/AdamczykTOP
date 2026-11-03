import type { NavigationData } from "@ts/navigation.types";

export const navigation:NavigationData = {
    brand:'AdamczykTOP',
    menu:[
        {
            label:'Start',
            order:1,
            uri:'/'
        },
        {
            label:'O mnie',
            order:2,
            uri:'/o-mnie'
        },
        {
            label:'Usługi SEO',
            order:3,
            uri:'/oferta-seo',
            type:'mega',
            groups:[
                {
                    label:'Pozycjonowanie',
                    uri:'/oferta-seo/pozycjonowanie',
                    description:`Zwiększenie widoczności stron i sklepów w Google.`,
                    order:1,
                    items:[
                        {
                            label:'SEO lokalne',
                            uri:'/oferta-seo/pozycjonowanie/lokalne',
                            order:1
                        },
                        {
                            label:'SEO e-commerce',
                            uri:'/oferta-seo/pozycjonowanie/e-commerce',
                            order:2
                        },
                        {
                            label:'SEO międzynarodowe',
                            uri:'/oferta-seo/pozycjonowanie/miedzynarodowe',
                            order:3
                        },
                        {
                            label:'SEO dla miast',
                            uri:'/oferta-seo/miasta',
                            order:4
                        },
                        {
                            label:'SEO dla branż',
                            uri:'/oferta-seo/branze',
                            order:5
                        },
                    ]
                },
                {
                    label:'Audyty i analizy',
                    uri:'/oferta-seo/audyty',
                    description:`Wykrywanie problemów i odkrywanie potencjału SEO.`,
                    order:2,
                    items:[
                        {
                            label:'Audyt strony',
                            uri:'/oferta-seo/audyty/audyt-strony',
                            order:1,
                        },
                        {
                            label:'Analiza konkurencji',
                            uri:'/oferta-seo/audyty/analiza-konkurencji',
                            order:2,
                        },
                        {
                            label:'Analiza słów kluczowych',
                            uri:'/oferta-seo/audyty/analiza-slow-kluczowych',
                            order:3,
                        },
                        {
                            label:'Audyt UI/UX',
                            uri:'/oferta-seo/audyty/audyt-ui-ux',
                            order:4,
                        },
                        {
                            label:'Analiza dostępności',
                            uri:'/oferta-seo/audyty/analiza-dostepnosci',
                            order:5,
                        },
                    ]
                },
                {
                    label:'On-site SEO',
                    uri:'/oferta-seo/on-site',
                    description:`Treści, struktura i techniczne elemtów strony.`,
                    order:3,
                    items:[
                        {
                            label:'Optymalizacja techniczna',
                            uri:'/oferta-seo/optymalizacja/techniczna',
                            order:1,
                        },
                        {
                            label:'Content marketing',
                            uri:'/oferta-seo/content-marketing',
                            order:2,
                        },
                        {
                            label:'Migracje SEO',
                            uri:'/oferta-seo/on-site/migracje',
                            order:3,
                        },
                        {
                            label:'Linkowanie wewnętrzne',
                            uri:'/oferta-seo/linkowanie/wewnetrzne',
                            order:4,
                        },
                        {
                            label:'Dane strukturalne',
                            uri:'/oferta-seo/optymalizacja/dane-strukturalne',
                            order:5,
                        },
                    ]
                },
                {
                    label:'Off-site SEO',
                    description:`Budowa autorytetu i widoczności w sieci.`,
                    uri:'/oferta-seo/off-site',
                    order:4,
                    items:[
                        {
                            label:'Linkowanie zewnętrzne',
                            order:1,
                            uri:'/oferta-seo/linkowanie/zewnetrzne'
                        },
                        {
                            label:'Analiza profilu linkowego',
                            order:2,
                            uri:'/oferta-seo/audyty/analiza-profilu-linkowego'
                        },
                        {
                            label:'Wizytówka Google',
                            order:3,
                            uri:'/oferta-seo/off-site/wizytkowka-google'
                        },
                    ]
                },
            ]
        },
        {
            label:'Realizacje',
            order:4,
            uri:'/realizacje'
        },
        {
            label:'Blog',
            order:5,
            type:'dropdown',
            uri:'/blog',
            items:[
                {
                    label:'Wiedza SEO',
                    uri:'/blog/wiedza',
                    description:`Poradniki i praktyczna wiedza SEO`,
                    order:1,
                },
                {
                    label:'Newsy SEO',
                    uri:'/blog/newsy',
                    description:`Algorytmy Google i zmiany w branży`,
                    order:2,
                },
                {
                    label:'Aktualności',
                    uri:'/blog/aktualnosci',
                    description:`Co nowego w AdamczykTOP?`,
                    order:3,
                }
            ]
        }
    ],
    callToAction: {
        label:'Kontakt',
        uri:'/kontakt'
    }
}
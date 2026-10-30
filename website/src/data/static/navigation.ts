type t_navigation = {
    brand:'AdamczykTOP';
    menu:Array<{
        label:string;
        uri:string;
        order:number;
        dropdown?:Array<{
            label:string;
            uri:string;
            order:number;
        }>
    }>
}

export const navigation:t_navigation = {
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
            uri:'/oferta',
            dropdown:[
                {
                    label:'Audyty i analizy',
                    order:1,
                    uri:'/oferta/audyty-i-analizy'
                },
                {
                    label:'Content marketing',
                    uri:'/oferta/content-marketing',
                    order:2,
                },
                {
                    label:'Link building',
                    order:3,
                    uri:'/oferta/link-building',
                },
                {
                    label:'SEO dla branż',
                    order:4,
                    uri:'/oferta/branze',
                },
                {
                    label:'SEO dla miast',
                    order:5,
                    uri:'/oferta/miasta',
                }
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
            uri:'/blog'
        },
        {
            label:'Kontakt',
            order:6,
            uri:'/kontakt'
        }
    ]
}
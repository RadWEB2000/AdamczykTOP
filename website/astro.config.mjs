// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // site: 'https://adamczyk.top',
    trailingSlash:'never',
    fonts:[
        {
            provider: fontProviders.local(),
            name:'Stack Sans Headline',
            cssVariable:'--font-display',
            weights:[400,500,600,700],
            subsets: ["latin", "latin-ext"],
            options:{
                variants:[
                    {
                        src:['./src/assets/fonts/stack-sans-headline.woff2'],
                        weight:'200 700',
                        style:'normal'
                    }
                ]
            },
            styles:['normal']
        },
        {
            provider:fontProviders.local(),
            name:'Space Grotesk',
            cssVariable:'--font-body',
            weights:[400,500,600,700],
            subsets: ["latin", "latin-ext"],
            options:{
                variants:[
                    {
                        src:['./src/assets/fonts/space-grotesk.woff2'],
                        weight:'200 700',
                        style:'normal'
                    }
                ]
            },
            styles:['normal']
        },
        {
            provider:fontProviders.local(),
            name:'Bitcount Prop Single',
            cssVariable:'--font-data',
            weights:[400,600],
            options:{
                variants:[
                    {
                        src:['./src/assets/fonts/bitcount-prop-single.woff2'],
                        weight:'200 700',
                        style:'normal'
                    }
                ]
            },
            subsets: ["latin", "latin-ext"],
            styles:['normal']
        }
    ]
});

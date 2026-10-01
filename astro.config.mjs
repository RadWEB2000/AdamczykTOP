// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
    fonts: [
        {
            provider:fontProviders.google(),
            name:'Rubik',
            cssVariable:'--font-rubik',
            weights:['300 900'],
            styles:['italic','normal'],
            subsets:['latin','latin-ext'],
        },
        {
            provider:fontProviders.google(),
            name:'Manrope',
            cssVariable:'--font-manrope',
            weights:['200 800'],
            styles:['normal'],
            subsets:['latin','latin-ext'],
        },
        {
            provider:fontProviders.google(),
            name:'Fira Code',
            cssVariable:'--font-fira-code',
            weights:['300 700'],
            styles:['normal'],
            subsets:['latin','latin-ext'],
        },
    ],
});

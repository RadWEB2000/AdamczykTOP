// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import webmanifest from 'astro-webmanifest';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://adamczyk.top',
  trailingSlash:'never',
  fonts:[
      {
          provider: fontProviders.local(),
          name:'Bigger Display',
          cssVariable:'--font-legend-bold',
          weights:[400,500,600,700],
          subsets: ["latin", "latin-ext"],
          options:{
              variants:[
                  {
                      src:['./src/assets/fonts/legend-bold.woff2'],
                      weight:'400 900',
                      style:'normal'
                  }
              ]
          },
          styles:['normal']
      },
      {
          provider:fontProviders.local(),
          name:'Outfit',
          cssVariable:'--font-outfit',
          subsets: ["latin", "latin-ext"],
          options:{
              variants:[
                  {
                      src:['./src/assets/fonts/outfit.woff2'],
                      weight:'100 900',
                      style:'normal'
                  }
              ]
          },
          styles:['normal']
      },
      {
          provider:fontProviders.local(),
          name:'DM Sans',
          cssVariable:'--font-dm-sans',
          options:{
              variants:[
                  {
                      src:['./src/assets/fonts/dm-sans.woff2'],
                      weight:'100 900',
                      style:'normal'
                  },
                  {
                      src:['./src/assets/fonts/dm-sans-italic.woff2'],
                      weight:'100 900',
                      style:'italic'
                  },
              ]
          },
          subsets: ["latin", "latin-ext"],
          styles:['normal']
      }
  ],
  integrations: [alpinejs({
    entrypoint:'./src/lib/configs/entrypoint.ts'
  }), sitemap({}), webmanifest({
    name:'AdamczykTOP',
    short_name:'AdamczykTOP',
    start_url:'/',
    theme_color:'oklch(49.068% 0.26354 263.993)',
    background_color:'oklch(49.068% 0.26354 263.993)'
  })]
});
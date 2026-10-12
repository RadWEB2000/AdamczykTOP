import { Geist, Geist_Mono } from 'next/font/google'

const geist = Geist({
    variable:'--font-geist',
    subsets:['latin','latin-ext'],
    preload:true,
    display:'swap',
})

const geistMono = Geist_Mono({
    variable:'--font-geist-mono',
    subsets:['latin','latin-ext'],
})

const fonts:string = `${geist.variable} ${geistMono.variable}`;

export default fonts;
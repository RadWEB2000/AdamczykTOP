import type { Alpine } from "alpinejs";

interface Props {
    open:boolean;
    toggle():void;
    close():void;
    init():void;
    scrolled:boolean;
}

export function navigationController(alpine:Alpine){
    alpine.store('navigation',{
        open:false,
        toggle(this:Props){
            this.open = !this.open
        },
        close(this:Props){
            this.open = false
        },
        scrolled:false,
        init(this:Props) {
            const updateScroll = () => {
                this.scrolled = window.scrollY > 0;
            };
            updateScroll();
            window.addEventListener('scroll', updateScroll, {
                passive:true
            })
        }
    })
}
import type { I_NavigationController } from "@ts/navigation.types";
import type { Alpine } from "alpinejs";

export function navigationController(alpine:Alpine){

    const navigation:I_NavigationController = {
        isOpen:false,
        isScrolled:false,
        activeMenu:null,
        closeTimer:null,
        init(){
            const updateScroll = () => {
                this.isScrolled = window.scrollY > 0;
            };
            updateScroll();
            window.addEventListener('scroll',updateScroll,{passive:true});
        },
        toggle(){
            if(this.isOpen){this.close()}
            else{this.isOpen = true}
        },
        close(){
            this.isOpen = false;
            this.resetMenu();
        },
        openMenu(id){
            this.cancelClose();
            this.activeMenu = id;
        },
        closeMenu(id){
            if(!this.isMenuOpen(id)) return;
            this.cancelClose();
            this.closeTimer = window.setTimeout(() => {
                if(this.isMenuOpen(id)){
                    this.activeMenu = null;
                }
                this.closeTimer = null;
            }, 150)
        },
        toggleMenu(id){
            this.cancelClose();
            this.activeMenu = this.isMenuOpen(id) ? null : id;
        },
        isMenuOpen(id){
            return this.activeMenu === id;
        },
        resetMenu(){
            this.cancelClose(),
            this.activeMenu = null;
        },
        onMenuEnter(id){
            if(this.hoverSupported()){this.openMenu(id)}
        },
        onMenuLeave(id){
            if(this.hoverSupported()){this.closeMenu(id)}
        },
        cancelClose(){
            if(this.closeTimer === null) return;
            window.clearTimeout(this.closeTimer);
            this.closeTimer = null;
        },
        hoverSupported(){
            return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        }
    }

    alpine.store("navigation",navigation);
}
export type NavigationMenuLink = {
    label:string;
    uri:string;
    order:number;
}

export type NavigaitonMenuItem = 
| (NavigationMenuLink & {
    type?:'link'
})
| (NavigationMenuLink & {
    type:'dropdown';
    items:Array<NavigationMenuLink & {
        description:string;
    }>
})
| (NavigationMenuLink & {
    type:'mega';
    groups:Array<NavigationMenuLink & {
        description:string;
        items:Array<NavigationMenuLink>
    }>
})

export type Brand = {
    brand:string;
}

export type NavigationData = Brand & {
    menu:Array<NavigaitonMenuItem>;
    callToAction:CallToAction;
}

export type CallToAction = {
    label:string;
    uri:string;
}


export interface I_NavigationController {
    isOpen:boolean;
    isScrolled:boolean;
    activeMenu:string|null;
    closeTimer:number|null;
    init():void;
    toggle():void;
    close():void;
    openMenu(id:string):void;
    closeMenu(id:string):void;
    toggleMenu(id:string):void;
    isMenuOpen(id:string):boolean;
    resetMenu():void;
    onMenuEnter(id: string): void;
    onMenuLeave(id: string): void;
    cancelClose():void;
    hoverSupported():boolean;
}
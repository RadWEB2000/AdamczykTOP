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
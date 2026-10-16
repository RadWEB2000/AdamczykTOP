'use client';

import { createContext } from "react";

const NavigationContext = createContext({
    isScrolled:false,
    isOpen:false,
    toggle:() => {},
    close:() => {}
})

export default NavigationContext;
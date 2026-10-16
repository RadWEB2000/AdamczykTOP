'use client'

import { NavigationContext } from "@/context";
import { useEffect, useState, type ReactNode } from "react";

export default function NavigationProvider({children}:{children:ReactNode}){

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [isScrolled,setIsScrolled] = useState<boolean>(false);

    useEffect(() => {

        function handleScroll(){
            setIsScrolled(window.scrollY > 10);
        }

        handleScroll();

        window.addEventListener('scroll',handleScroll, {
            passive:true
        })

        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <NavigationContext.Provider
            value={{
                close:() => setIsOpen(false),
                isOpen,
                isScrolled,
                toggle:() => setIsOpen(!isOpen)
            }}
        >
            <nav
                className="group/navigation fixed top-0 left-0 w-full bg-base-700/95 z-999 backdrop-blur-[3px] backdrop-brightness-95 border-b border-b-base-500/25 @container/wrapper
                
                lg4:bg-transparent
                lg4:border-b-base-500/0
                lg4:backdrop-blur-[0] 
                lg4:backdrop-brightness-100

                lg4:data-[is-scrolled=true]:bg-base-700/95
                lg4:data-[is-scrolled=true]:border-b-base-500/25
                lg4:data-[is-scrolled=true]:backdrop-blur-[2px] 
                lg4:data-[is-scrolled=true]:backdrop-brightness-95

                duration-300 ease-in-out
                "
                data-is-scrolled={isScrolled}
                data-is-open={isOpen}
            >
                {children}
            </nav>
        </NavigationContext.Provider>
    )
}
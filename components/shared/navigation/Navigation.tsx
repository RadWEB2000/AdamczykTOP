import { MenuButton } from "@/common/buttons";
import NavigationProvider from "@/providers/NavigationProvider";
import {Brand, Menu} from "@/shared/navigation";

export default function Navigation(){
    return (
        <NavigationProvider>
            <div className="hero-width mx-auto grid grid-cols-[auto_80px] grid-rows-[90px_0px] group-data-[is-open=true]/navigation:grid-rows-[90px_calc(100vh-90px)] group-data-[is-open=true]/navigation:h-screen overflow-hidden items-center duration-300 ease-in-out @lg4/wrapper:flex @lg4/wrapper:items-center @lg4/wrapper:justify-end @lg4/wrapper:py-2.5 @2xl5/wrapper:py-3.5
            
                
            ">
                <div
                    className="mr-auto col-start-1 row-start-1 "
                >
                    <Brand/>
                </div>
                <div
                    className="row-start-2 col-span-full h-full"
                >
                    <Menu/>
                </div>
                <div
                    className="col-start-2 row-start-1 items-center flex justify-end h-full @lg4/wrapper:hidden"
                >
                    <MenuButton/>
                </div>
            </div>
        </NavigationProvider>
    )
}
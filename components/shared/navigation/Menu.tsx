import {MenuItem as Item} from "@/shared/navigation";

export default function Menu(){
    return (
        <menu
            className="items-start flex flex-col justify-end gap-x-6 p-3 gap-y-4 @lg4/wrapper:flex-row"
        >
            <Item href="#" label="Start" />
            <Item href="#" label="O mnie" />
            <Item href="#" label="Oferta" />
            <Item href="#" label="Realizacje" />
            <Item href="#" label="Blog" />
            <Item href="#" label="Kontakt" />
        </menu>
    )
}
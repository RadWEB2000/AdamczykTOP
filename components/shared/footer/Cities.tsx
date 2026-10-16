import Link from "next/link";

const cities: string[] = [
  "Poznań",
  "Luboń",
  "Swarzędz",
  "Mosina",
  "Puszczykowo",
  "Komorniki",
  "Dopiewo",
  "Tarnowo Podgórne",
  "Rokietnica",
  "Suchy Las",
  "Czerwonak",
  "Murowana Goślina",
  "Pobiedziska",
  "Kostrzyn",
  "Kórnik",
  "Stęszew",
  "Buk",
  "Opalenica",
  "Oborniki",
  "Szamotuły",
  "Pniewy",
  "Wronki",
  "Śrem",
  "Środa Wielkopolska",
  "Kościan",
  "Czempiń",
  "Grodzisk Wielkopolski",
  "Nowy Tomyśl",
  "Wolsztyn",
  "Rakoniewice",
  "Leszno",
  "Gostyń",
  "Rawicz",
  "Września",
  "Gniezno",
  "Wągrowiec",
  "Jarocin",
  "Konin",
  "Kalisz",
  "Ostrów Wielkopolski",
];


export default function Cities(){
    return (
        <div
            className="@container/cities"
        >
            <span
                className="h-0.75 w-full block bg-base-300/25 mb-4 mt-6 @xs3/cities:mt-8  @2xl5/cities:mb-6"
            />
            <div
                className="items-center flex group *:shrink-0 gap-x-5 overflow-x-scroll scrollbar-none"
            >
                {
                    cities.map((city) => {
                        return (
                            <Link className="hocus:text-brand-200! group-hover:text-base-500 duration-200 ease-linear font-medium text-xs @xs3/cities:text-sm @sm2/cities:text-base @2xl2/wrapper:text-lg @2xl5/cities:text-xl" href="#" key={`footer-city-${city}`} >
                                {city}
                            </Link>
                        )
                    })
                }
            </div>
            <span
                className="h-0.75 w-full block bg-base-300/25 mt-4 mb-6 @xs3/cities:mb-8  @2xl5/cities:mt-6"
            />
        </div>
    )
}
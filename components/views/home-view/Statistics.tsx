import { StatisticsTile as Tile} from "@/common/utils";

type statisticsTile = {
    value:number;
    unit:'%'|'+',
    title:string;
}

const stats:Array<statisticsTile> = [
    {
        title:'Lat doświadczenia',
        unit:'+',
        value:new Date().getFullYear() - 2016,
    },
    {
        title:'Udanych współprac',
        unit:'+',
        value:417
    },
    {
        title:'Znanych branż',
        unit:'+',
        value:210
    }
]

export default function Statistics(){
    return (
        <div
            className="grid grid-cols-3 @container/stats gap-y-3 mb-10 gap-x-2 @md/wrapper:col-start-1 @md/wrapper:row-start-2 @lg3/wrapper:col-start-3 @lg3/wrapper:row-start-1 @lg3/wrapper:row-end-3 @lg3/wrapper:flex @lg3/wrapper:flex-col @lg3/wrapper:items-center @lg3/wrapper:gap-y-6 "
        >
            {
                stats.map(({...item}) => {
                    return (
                        <Tile
                            {...item}
                            key={`statistics-tile-${item.value}-${item.title}`}
                        />
                    )
                })
            }
        </div>
    )
}

type statisticsTile = {
    value:number;
    unit:'%'|'+',
    title:string;
}
export default function StatisticsTile({title,unit,value}:statisticsTile){
    return (
        <li
            className="list-none flex flex-col items-center *:leading-none text-center"
        >
            <strong className="text-6xl-plus font-mono text-brand-200 lg4:text-12xl 2xl4:text-13xl">19</strong>
            <span className="text-xs font-semibold uppercase mt-1 text-support-300 lg4:text-xl  lg4:mt-2 2xl4:text-3xl">lat doświadczenia</span>
        </li>
    )
}
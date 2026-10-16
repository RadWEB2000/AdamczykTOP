import Link, { type LinkProps } from "next/link";

const policies:Array<LinkProps & {label:string}> = [
    {
        href:'#',
        label:'Polityka prywatności'
    },
    {
        href:'#',
        label:'Polityka Cookies'
    },
]

export default function Policies(){
    return (
        <div
            className="flex items-center gap-x-3 row-start-3 justify-center @lg3/wrapper:row-start-1 @lg3/wrapper:col-start-1 @lg3/wrapper:justify-start"
        >
            {
                policies.map(({href,label}) => {
                    return (
                        <Link className="text-sm uppercase  @2xl5/wrapper:text-base" href={href} key={`policy-link-${label}`} >
                            {label}    
                        </Link>
                    )
                })
            }
        </div>
)
}
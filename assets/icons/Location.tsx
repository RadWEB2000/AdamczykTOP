export default function Location({...props}:T_SVG){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
            <circle cx={50} cy={43} r={9} />
            <path d="M50 19c-13.23 0-24 10.77-24 24 0 13.01 10.13 38 24 38s24-24.99 24-38c0-13.23-10.77-24-24-24zm0 37c-7.17 0-13-5.83-13-13s5.83-13 13-13 13 5.83 13 13-5.83 13-13 13z" />
        </svg>
    )
}
import {Link} from 'react-router-dom'

export function ButtonHeader({label,buttontext,to}){
    console.log("rendered buttonheader")
    return(<div>
        <div py-2 text-sm flex justify-center>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>{buttontext}</Link>
    </div>)
}


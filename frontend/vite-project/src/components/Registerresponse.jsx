

export function Registerresponse({label,status}){
    
    return (
        <div>
{status==200?<h4 className="text-green-400">{label}</h4>:<h4 className="text-red-400">{label}</h4>}
        </div>
    )
}
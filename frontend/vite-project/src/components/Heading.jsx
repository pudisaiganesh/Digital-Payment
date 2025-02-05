export function Heading({label}){
    console.log("rendered heading")
    return (
        <div className="font-bold text-4xl pt-6">
         {label}
        </div>
    )
}
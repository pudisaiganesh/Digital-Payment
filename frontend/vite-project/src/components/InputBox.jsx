

export function InputBox({placeholder,label,onChange}){
   console.log("renderinputbox")
    return (
        <div>
         <div className="text-fm font-medium text-left py-2">
          {label}
         </div>
         <input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border-2 rounded-md"></input>
        </div>
    )
}
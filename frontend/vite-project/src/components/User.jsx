import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
export function User({name,avatar,id}){
     const navigate=useNavigate()
    return (
        <div className="flex justify-between items-center mt-2 p border border-black-500 border-solid">
           <div className="flex items-center">
            <div className="pr-2 pl-2">{name}</div>
            <div className="text-2xl text-green-400 bg-white-500 rounded-full  border border-cyan-500 border-solid">{avatar}</div>
           </div>
           <div className="pt-2 pr-2">
           <Button onClick={()=>navigate("/transfer?id="+id+"&name="+name)}label="SendMoney"></Button>
           </div>
        </div>
    )
}
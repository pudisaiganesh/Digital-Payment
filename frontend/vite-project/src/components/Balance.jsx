import axios from "axios"
import { useEffect, useState } from "react"

export function Balance(){
     console.log("rendere balance")
    const [balance,setBalance]=useState("")
    useEffect(()=>{
      axios("http://localhost:3000/psg/balance",{
        method:'GET',
        headers:{
           'Authorization':`Bearer ${localStorage.getItem("psgtoken")}`,
           'Content-Type':'application/json'
        }
            
        }
        ).then((response)=>setBalance(response.data.balance))
    },[])
   return (
    <div className="text-2xl font-medium pt-2 pl-4">
        Your Balance is Rs {balance}
    </div>
   )
}
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useSearchParams } from "react-router-dom";
import { Registerresponse } from "../components/Registerresponse";
import { useState } from "react";
import axios from 'axios'


export function SendMoney(){
    const [searchParms]=useSearchParams()
   const [response,setResponse]=useState("")
   const [responsestatus,setResponsestatus]=useState("")
    const [amount,setAmount]=useState("")
  

    const name=searchParms.get("name")
    const id=searchParms.get("id")
    console.log(id)
    async function transfer(){
        
        axios("http://localhost:3000/psg/transfer",{
            method:'POST',
            data:JSON.stringify({
                "toaccount":id,
                "amount":amount
            }),
            headers:{
               'Authorization':`Bearer ${localStorage.getItem("psgtoken")}`,
               'Content-Type':'application/json'
            }
           }).then((response)=>{
            console.log("entered respose")
            setResponse(response.data.msg)
            setResponsestatus(response.data.status)
        }).catch((error)=>{
            console.log("entered catch")
            console.log(error.response)
            console.log(error.response.data.msg)
            setResponse(error.response.data.msg)
            setResponsestatus(response.data.status)
        })
    }

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                   <Heading label="SendMoney"></Heading>
                   <Registerresponse label={response} status={responsestatus}></Registerresponse>
                    <InputBox onChange={(e)=>{setAmount(e.target.value)}}placeholder="Amount" label={name}></InputBox>
                    <div className="pt-2 ">
                     <Button onClick={()=>{transfer()}}label="Transfer"></Button>
                    </div>
                    
                </div>
            </div>
        </div>
     
    )
}
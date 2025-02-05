import { Button } from "../components/Button";
import { ButtonHeader } from "../components/ButtonHeader";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import { Heading } from "../components/Heading";
import { Registerresponse } from "../components/Registerresponse";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Signin(){
    const navigate=useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [response,setResponse]=useState("")
    const [responsestatus,setResponsestatus]=useState("")

    async function login(){
        console.log("INSIDE LOGIN")
    
        const response=await fetch(`http://localhost:3000/psg/signin?username=${username}&password=${password}`)
 
        const body=await response.json()
        
        
        
        if(body.status=="200"){
            console.log("insideif")
            localStorage.setItem("psgtoken",body.token)
            navigate("/home")
        }else{
            setResponse(body.msg)
            setResponsestatus(body.status)
        }
        
    }


    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label="Signin"></Heading>
                    <Subheading label="Login to your Account"></Subheading>
                    <Registerresponse label={response} status={responsestatus}></Registerresponse>
                    <InputBox placeholder="username" onChange={(e)=>{setUsername(e.target.value)}} label="Username"></InputBox>
                    <InputBox placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} label="Password"></InputBox>
                    <div className="pt-4">
                     <Button onClick={()=>{login()}}label="Signin"></Button>
                    </div>
                    <ButtonHeader label="Don't have Account" to="/" buttontext="Signup"></ButtonHeader>
                </div>
            </div>
        </div>

        
    )
}
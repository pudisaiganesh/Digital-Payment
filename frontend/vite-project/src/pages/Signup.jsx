import { InputBox } from "../components/InputBox"
import {Heading} from "../components/Heading"
import { Subheading } from "../components/Subheading"
import {Button} from "../components/Button"
import { ButtonHeader } from "../components/ButtonHeader"
import { Registerresponse } from "../components/Registerresponse"
import { useState } from "react"
export function Signup(){

    const [username,setUsername]=useState("")
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [response,setResponse]=useState("")
    const [responsestatus,setResponsestatus]=useState("")
    console.log("rendered signup")
    async function registeruser(){

        console.log("calling registeruser")
        const response=await fetch("http://localhost:3000/psg/signup",{
            method:"POST",
            body:JSON.stringify({
               username:username,
               firstname:firstname,
               lastname:lastname,
               email:email,
               password:password
            }),
            headers:{
             "Content-Type":"application/json"
            }
            
        })
        const body=await response.json()
        setResponse(body.msg)
        setResponsestatus(body.status)
        console.log(body)
        
    }
    

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label="SignUp"></Heading>
            <Subheading label="Enter your information to create Account"></Subheading>
            <Registerresponse label={response} status={responsestatus}></Registerresponse>
            <InputBox placeholder="username" onChange={(e)=>setUsername(e.target.value)} label="UserName"/>
            <InputBox placeholder="firstname" onChange={(e)=>setFirstname(e.target.value)} label="FirstName"/>
            <InputBox placeholder="lastname" onChange={(e)=>setLastname(e.target.value)} label="LastName"/>
            <InputBox placeholder="emailid" onChange={(e)=>setEmail(e.target.value)} label="Email"/>
            <InputBox placeholder="password" onChange={(e)=>setPassword(e.target.value)} label="Password"/>
            <div className="pt-4">
            <Button onClick={()=>registeruser()} label="SignUp"></Button>
            </div>
            <ButtonHeader label="Already have an Account" to="/signin" buttontext="Signin"></ButtonHeader>
           </div>
        </div>
        </div>
    )
}
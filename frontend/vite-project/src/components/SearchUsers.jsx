import { useRecoilValue } from "recoil"
import { filteratom } from "../atoms/registeratom"
import { User } from "./User"
import { useState,useEffect } from "react"
import axios from "axios"

export function SearchUsers(){
    console.log("rendered search users")
    const filter=useRecoilValue(filteratom)
    const [users,setUsers]=useState("")
    
    useEffect(()=>{
       axios("http://localhost:3000/psg/users:"+filter,{
        method:'GET',
        headers:{
           'Authorization':`Bearer ${localStorage.getItem("psgtoken")}`,
           'Content-Type':'application/json'
        }
       }).then((response)=>{setUsers(response.data.users)})
    },[filter])

    return (
        <div>
        {users?users.map((user)=>{return <User id={user.id} name={user.firstname} avatar={user.firstname[0].toUpperCase()+user.lastname[0].toUpperCase()}></User>}):<h1></h1>}
        </div>
    )
}
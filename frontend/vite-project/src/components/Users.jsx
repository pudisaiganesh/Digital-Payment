import { useEffect,useState } from "react";
import axios from "axios"
import { InputBox } from "./InputBox";
import {User} from "./User"
export function Users(){
   
    const [users,setUsers]=useState("")
    const [filter,setFilter]=useState("none")

    useEffect(()=>{
       axios("http://localhost:3000/psg/users:"+filter,{
        method:'GET',
        headers:{
           'Authorization':`Bearer ${localStorage.getItem("psgtoken")}`,
           'Content-Type':'application/json'
        }
       }).then((response)=>{setUsers(response.data.users)})
    },[filter])

    return(
        <div className="pl-4 pr-4">
            <InputBox  onChange={(e)=>{setFilter(e.target.value)}} label="Users" placeholder="search"></InputBox>
            {users?users.map((user)=>{return <User id={user.id} name={user.firstname} avatar={user.firstname[0].toUpperCase()+user.lastname[0].toUpperCase()}></User>}):<h1></h1>}
        </div>
    )
}
import { HomeHeading } from "../components/HomeHeading";
import {Balance} from "../components/Balance"
import {Users} from "../components/Users"

export function Home(){
    return (
        <div>
         
          <HomeHeading/>
          <Balance/>
          <Users/>
        
        </div>
    )
}
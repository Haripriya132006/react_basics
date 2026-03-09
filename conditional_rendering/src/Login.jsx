import { useState } from "react"
import Mainpage from "./Mainpage";

function Login({state,setstate}){
    const[text,setText] =useState("Login");

    const handle_login=function handle_login(){
        if (state==true){
            setText("Login");
            setstate(false);
        }
        if(state==false){
            setText("Logout");
            setstate(true);
        }
    }

    return(
    <>
    <button onClick={handle_login}>{text}</button>
    {state && <Mainpage/>}
    </>
)
}

export default Login
import { useState, useEffect } from "react";

function Mainpage(){

    const [list,setList] = useState([]);
    const [score,setScore] = useState(580);
    const [showPass,setShowPass] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
            setList(["Item1","Item2"]);
        },2000);
    },[]);

    return(
        <>
        <h1>Mainpage</h1>

        {/* Loading message */}
        {loading && <p>Loading...</p>}

        {/* Display message if list is empty */}
        {!loading && list.length===0 && <p>List is empty</p>}

        {!loading && list.length>0 &&
            <ul>
                {list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        }

        {/* Background color based on score */}
        <div style={{backgroundColor: score>50 ? "lightgreen" : "lightcoral"}}>
            Score: {score}
        </div>

        {/* Show / Hide password */}
        <div>
            <input type={showPass ? "text" : "password"} placeholder="Enter password"/>
            <button onClick={()=>setShowPass(!showPass)}>
                {showPass ? "Hide" : "Show"}
            </button>
        </div>

        </>
    )
}

export default Mainpage;
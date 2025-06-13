import { useState,useEffect } from "react";
import axios from 'axios'
const baseU="https://catfact.ninja/fact"
function CF(){
    const [line,setline]=useState('')
    function fun(){
        axios
        .get(baseU)
        .then((res)=>{setline(res.data)})
        .catch((err)=>{console.error(err)})
    }
    useEffect(fun,[])
    return(
        <div>
            <h1>{line.fact}</h1>
            <button onClick={fun}>check</button>
        </div>
    )
}
export default CF;
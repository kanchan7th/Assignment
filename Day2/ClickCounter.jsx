import React,{useState} from "react";

const ClickCounter=()=>{
    const[counter,setCounter]= useState(0);

    const handleClick=(value)=>{
        
       
    setCounter(counter+value)
    };
   

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>handleClick(1)}>Click Me</button><br/><br/>
            <button onClick={()=>handleClick(-2)}>Decrease by 2</button>
        </div>
    )

}
export default ClickCounter;
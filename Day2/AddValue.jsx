import React, {useState} from "react";

const AddValue = ()=>{
    const [name,setName]=useState()
    const [nameList,setNameList]= useState([]);
   

   const displayName=(e)=>{
        setName(e.target.value);
        console.log(name)

    
    }

    const buttonClicked=()=>{
        if(name.trim()!=="")
        setNameList([...nameList,name]);
        setName("")
    }

    return (
        <div>
            <form>
            <label>Enter Your Name</label>
            <input type="text" value={name} onChange={displayName}/>
            <button type="button"onClick={buttonClicked}>Add</button>
            <ul>
                {nameList.map((name,index)=>(<li key={index}>{name}</li>))}
            </ul>

        </form>
        </div>
        
    )
}
export default AddValue;
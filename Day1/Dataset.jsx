import React from "react"

const Data= ()=>{
    const [showData, setShowData]= React.useState(false);
    const Dataset =[
        { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
         { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
         { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
         { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
         { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
         { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
       ]

        const myData = Dataset.map((fruit,index)=>(
            <div key={index}>
                <table width={100}>
                    <tr>
                    <th>Category</th>
                    <th>Price</th>
                    <th> Stocked</th>
                    <th>Name</th>
                    </tr>
                    <tr>
                        <td>{fruit.category}</td>
                        <td>{fruit.price}</td>
                        <td>{fruit.stocked}</td>
                        <td>{fruit.name}</td>
                    </tr>
                </table>
                
                
            </div>
        ))
         const datasetClicked=()=>{
            setShowData(true)
        }
    
return <div>
    
    <button onClick={datasetClicked}>Show Data</button>
    {showData?<div>{myData}</div>:<div></div>}
</div>    

}

export default Data;
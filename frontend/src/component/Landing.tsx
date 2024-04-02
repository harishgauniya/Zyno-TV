import { useState } from "react"

const Landing = () => {
  const [Name,setName]=useState("")
  return (
    <div>
      <input type="text" onChange={(e)=>
      {
        setName(e.target.value);
      }}>
      </input>
      <button onClick={()=>{
// Join room Logic here

      }}>Join</button>
    </div>
  )
}

export default Landing

import axios from "axios"
import Card from "../../Components/Card/Card"
import "./ShowSchools.css"
import { useEffect, useState } from "react"
const ShowSchools = () => {
  const [data, setData] = useState([])
  const [schools, setSchools] = useState([])
  const [input, setInput]=useState("")
//   const fetchData=async(value)=>{
//     const response=await axios.get("http://localhost:5000/api/schools")
//     console.log(response)
//   if(value ===""){
//     const Data=await response.data.filter((item)=>{
//       setSchools( item && item.name.toLowerCase().includes(value.toLowerCase()))
//     })
  
// console.log(Data)
//   }
//   else{
//     setSchools(response.data)
//   }
// }

useEffect(()=>{
  axios.get("http://localhost:5000/api/schools").then(res=>{
  setData(res.data)
  setSchools(res.data)
  })
  .catch(err=>console.log(err))
},[])

const filter=(e)=>{
  setSchools(data.filter(f=>f.name.toLowerCase().includes(e.target.value)))
}


  return (
    <div className="show-schools">
        <h1>School Search</h1>
        <p>Find the right school for your child.</p>
        <div className="input-search">
          <input 
          
          onChange={filter}
           type="text" placeholder="Search for a school" />
          <button>Search</button>
        </div>
        <div className="school-display-list">
          {
            schools.map((school)=>{
              return <Card name={school.name} address={school.address} city={school.city} image={school.image} key={school.id} />
              })
          }
      

        </div>


    </div>
  )
}

export default ShowSchools
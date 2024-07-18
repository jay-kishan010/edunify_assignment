// import { useEffect } from "react";
import "./Card.css"
// import axios from "axios";
const Card = ({name,address,city,image}) => {
   
  return (
   <div className="card">
    <div className="card-img-container">
        <img src={`http://localhost:5000/img/${image}`} alt="" className="card-img" />
    </div>

    <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-address">{address}</p>
        <p className="card-city">{city}</p>
    </div>
<button>Apply Now</button>
   </div>
  )
}

export default Card
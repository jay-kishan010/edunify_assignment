import "./Card.css"

const Card = () => {
  return (
   <div className="card">
    <div className="card-img-container">
        <img src="https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg" alt="" className="card-img" />
    </div>

    <div className="card-info">
        <h3 className="card-name">La Martiniere College</h3>
        <p className="card-address">Hazratganj</p>
        <p className="card-city">Lucknow</p>
    </div>
<button>Apply Now</button>
   </div>
  )
}

export default Card
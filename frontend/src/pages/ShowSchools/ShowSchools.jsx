import Card from "../../Components/Card/Card"
import "./ShowSchools.css"
const ShowSchools = () => {
  return (
    <div className="show-schools">
        <h1>School Search</h1>
        <p>Find the right school for your child.</p>
        <div className="input-search">
          <input type="text" placeholder="Search for a school" />
          <button>Search</button>
        </div>
        <div className="school-display-list">
          
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>


    </div>
  )
}

export default ShowSchools
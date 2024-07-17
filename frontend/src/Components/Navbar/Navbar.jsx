import "./Navbar.css"
import search from "../../assets/search_icon.png"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
   <div className="navbar">
    <img src="https://uniformapp.in/images/small_logo.png" className="logo" alt="EDUNIFY" />
    <ul className="navbar-menu">
    
        <Link to="/">Home</Link>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <Link to="/add" >Add</Link>
        </ul>
    <div className="navbar-right">
    <img className="search" src={search} alt="" />
      <button>Sign In</button>
    </div>
   </div>
  )
}

export default Navbar
import "./Navbar.css"
import search from "../../assets/search_icon.png"
const Navbar = () => {
  return (
   <div className="navbar">
    <img src="https://uniformapp.in/images/small_logo.png" className="logo" alt="EDUNIFY" />
    <ul className="navbar-menu">
    
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        </ul>
    <div className="navbar-right">
    <img className="search" src={search} alt="" />
      <button>Sign In</button>
    </div>
   </div>
  )
}

export default Navbar
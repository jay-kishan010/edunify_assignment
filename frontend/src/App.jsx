

import {Routes, Route} from "react-router-dom"
import AddSchool from './pages/AddSchool/AddSchool'
import ShowSchools from './pages/ShowSchools/ShowSchools'
import Navbar from './Components/Navbar/Navbar'
function App() {
  
  return (
    <>
     <div className="app">
     <Navbar/>
      <Routes>

      <Route path="/" element={<ShowSchools/>}/>
        <Route path="/add" element={<AddSchool />} />
        
      </Routes>
     </div>
    </>
  )
}

export default App

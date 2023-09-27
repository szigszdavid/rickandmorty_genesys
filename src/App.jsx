import { Outlet } from "react-router-dom"
import "./App.css"

function App() {
  
  return (
    <>
      <div id="detail" className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App

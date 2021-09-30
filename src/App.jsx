import Navbar from "./components/navbar"
import User from "./components/User"
function App() {
  return (
    <div className="bg-gray-500 w-screen h-screen">
      <Navbar title="Github" link="https://github.com/SalihKalender"/>
      <User user_name="SalihKalender"/>
    </div>  
  )
}

export default App

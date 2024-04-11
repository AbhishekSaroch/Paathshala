import "./App.css";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Try from "./pages/Try";
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/try" element={<Try />}/>
      </Routes>
    </div>
  );
}

export default App;

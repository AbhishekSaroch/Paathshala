import "./App.css";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Try from "./pages/Try";
import NavBar from "./components/common/NavBar";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/try" element={<Try />}/>
        <Route path="*" element={<Error />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/update-password" element={<UpdatePassword />}/>
        <Route path="/verify-email" element={<VerifyEmail />} /> 
        <Route path="/about" element={<About />} /> 
        
      </Routes>
    </div>
  );
}

export default App;

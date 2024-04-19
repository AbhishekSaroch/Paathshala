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
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import PrivateRoute from "./components/core/auth/PrivateRoute";
import Cart from "./components/core/Dashboard/Cart";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/try" element={<Try />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/update-password" element={<UpdatePassword />}/>
        <Route path="/verify-email" element={<VerifyEmail />} /> 
        <Route path="/about" element={<About />} /> 
        {/* Route for error handling */}
        <Route path="*" element={<Error />}/>

        {/* NOT OPEN ROUTES */}
        <Route
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
        >
        <Route path="/dashboard/my-profile" element={<MyProfile />} />
        <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />}/>
        <Route path="/dashboard/cart" element={<Cart />}/>
        <Route path="/dashboard/my-courses" element={<MyCourses />}/>
        <Route path="/dashboard/add-course" element={<AddCourse />}/>

        </Route>
       </Routes>
    </div>
  );
}

export default App;

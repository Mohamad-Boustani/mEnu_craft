import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Mealcard from "./pages/Mealcard";
import Myorders from "./pages/Myorders";

function App() {
  return (
    <div className="bg-gray-300 text-blck min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/meals" Component={Mealcard} />
        <Route path="/myorders" Component={Myorders} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;

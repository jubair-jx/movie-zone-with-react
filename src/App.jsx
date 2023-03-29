import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [watch, setWatch] = useState("");

  const handleBtnWatchCart = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sumWatchTime = previousWatchTime + time;
      localStorage.setItem("watchTime", sumWatchTime);
      setWatch(sumWatchTime);
    } else {
      localStorage.setItem("watchTime", time);
      setWatch(watch);
    }
  };
  const handleBtnRatingCart = () => {};
  return (
    <div className="App">
      <Header></Header>
      <div className="row container mx-5 mt-5">
        <div className="col-md-8">
          <Home handlebtn={handleBtnWatchCart}></Home>
        </div>
        <div className="col-md-4">
          <SideCart setwatch={watch}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

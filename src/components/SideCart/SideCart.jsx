import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideCart = ({ setwatch }) => {
  const [breakTime, setBreakTime] = useState(0);
  const [time, setTime] = useState(setwatch);
  useEffect(() => {
    const getLocalStr = localStorage.getItem("watchTime");
    setTime(getLocalStr);
    const breakTimeLocalStr = localStorage.getItem("break-Time");
    if (breakTimeLocalStr === null) {
      setBreakTime(0);
    } else {
      setBreakTime(breakTimeLocalStr);
    }
  }, [setwatch]);

  const handleFirstButton = (firstNumber) => {
    localStorage.setItem("break-Time", firstNumber);
    setBreakTime(firstNumber);
  };

  const handleSecondButton = (secondNumber) => {
    localStorage.setItem("break-Time", secondNumber);
    setBreakTime(secondNumber);
  };
  const handleThirdButton = (thirdNumber) => {
    localStorage.setItem("break-Time", thirdNumber);
    setBreakTime(thirdNumber);
  };
  const completeButton = () => {
    toast("Wow so easy!");
  };
  return (
    <div className="card mx-auto">
      <h2 className="text-center">My Cart</h2>
      <div className="card mt-5 text-center ">
        <div className="card-body ">
          <h5 className="card-title text-center">Total Time Watch</h5>
          <input className="mx-auto" type="text" value={time} disabled />
          <h4 className="card-subtitle mb-2 text-body-secondary mt-4">
            Add a Break Time
          </h4>
          <button
            onClick={() => {
              handleFirstButton(15);
            }}
            className="w-25 m-1 btn-circle bg-info btn btn-warning "
          >
            15
          </button>
          <button
            onClick={() => {
              handleSecondButton(20);
            }}
            className="w-25 btn-circle bg-danger btn btn-primary "
          >
            20
          </button>
          <button
            onClick={() => {
              handleThirdButton(25);
            }}
            className="w-25 m-1 btn-circle bg-secondary btn btn-danger "
          >
            25
          </button>
          <input
            className="mx-auto mt-4"
            type="text"
            value={breakTime}
            disabled
          />
          <button
            className="w-75 mt-3 btn btn-secondary"
            onClick={completeButton}
          >
            Completed Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;

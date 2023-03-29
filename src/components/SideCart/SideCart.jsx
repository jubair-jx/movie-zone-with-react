import React, { useEffect, useState } from "react";

const SideCart = ({ setwatch }) => {
  const [time, setTime] = useState(setwatch);
  useEffect(() => {
    const getLocalStr = localStorage.getItem("watchTime");
    setTime(getLocalStr);
  }, [setwatch]);
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
          <button className="w-25 m-1 btn-circle bg-info btn btn-warning ">
            15
          </button>
          <button className="w-25 btn-circle bg-danger btn btn-primary ">
            20
          </button>
          <button className="w-25 m-1 btn-circle bg-secondary btn btn-danger ">
            25
          </button>
          <input className="mx-auto mt-4" type="text" value={0} disabled />
          <button className="w-75 mt-3 btn btn-secondary">
            Completed Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;

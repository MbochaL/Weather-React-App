import React, { useState } from "react";

const Defaultcitys = ({ cityDefault }) => {
  const [defaultCity, setDefaultCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    cityDefault(defaultCity);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="citys-container">
          <div class="row">
            <div class="col">
              <button
                onClick={(e) => setDefaultCity(e.target.value)}
                value="cordoba"
                className="city-button"
              >
                {" "}
                Cordoba{" "}
              </button>
            </div>
            <div class="col">
              <button
                onClick={(e) => setDefaultCity(e.target.value)}
                value="Buenos Aires"
                className="city-button"
              >
                {" "}
                Buenos Aires{" "}
              </button>
            </div>
            <div class="col">
              <button
                onClick={(e) => setDefaultCity(e.target.value)}
                value="Chaco"
                className="city-button"
              >
                {" "}
                Chaco{" "}
              </button>
            </div>
            <div class="col">
              <button
                onClick={(e) => setDefaultCity(e.target.value)}
                value="Corrientes"
                className="city-button"
              >
                {" "}
                Corrientes{" "}
              </button>
            </div>
            <div class="col">
              <button
                onClick={(e) => setDefaultCity(e.target.value)}
                value="Mendoza"
                className="city-button"
              >
                {" "}
                Mendoza{" "}
              </button>
            </div>
          </div>
      </form>
    </div>
  );
};

export default Defaultcitys;

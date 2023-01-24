import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState("Bengaluru");
  const [load, setLoad] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState({});

  function handleWeather(response) {
    //console.log(response);
    if (response.status === 200) {
      setLoad(true);
      setWeatherDetails({
        temp: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        city: `${response.data.name}`,
        country: `${response.data.sys.country}`,
      });
    } else {
      setLoad(false);
    }
  }
  function handleMyLocation(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let tempUnit = "metric";
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${tempUnit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleWeather);
  }

  function getMyLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleMyLocation);
  }
  function handleSearch(event) {
    event.preventDefault();
    let tempUnit = "metric";
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempUnit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleWeather);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <div className="row">
          <div className="col-10">
            <div className="input-group">
              <input
                type="search"
                placeholder="Search for a city"
                onChange={handleCityChange}
              />
              <button type="submit" className="btn btn-outline-dark">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-dark my-location"
              value="my-location"
              onClick={getMyLocation}
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
      </form>
      <Weather display={load} place={city} weather={weatherDetails} />
    </div>
  );
}

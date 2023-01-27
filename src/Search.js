import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";

import { MagnifyingGlass } from "react-loader-spinner";

export default function Search() {
  const [city, setCity] = useState("Bengaluru");
  const [appBg, setAppBg] = useState(`to top, #6a85b6 0%, #bac8e0 100%`);
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });

  function handleWeather(response) {
    let localDate = new Date();
    let timeOffSet = localDate.getTimezoneOffset();
    //console.log(response);
    if (response.status === 200) {
      setWeatherDetails({
        ready: true,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        city: `${response.data.name}`,
        country: `${response.data.sys.country}`,
        temp: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        minTemp: response.data.main.temp_min,
        maxTemp: response.data.main.temp_max,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        date:
          response.data.dt * 1000 +
          timeOffSet * 60000 +
          response.data.timezone * 1000,
        sunRise:
          response.data.sys.sunrise * 1000 +
          timeOffSet * 60000 +
          response.data.timezone * 1000,
        sunSet:
          response.data.sys.sunset * 1000 +
          timeOffSet * 60000 +
          response.data.timezone * 1000,
      });
      console.log(weatherDetails.sunSet > weatherDetails.date);
      console.log(weatherDetails.date > weatherDetails.sunRise);
      if (
        weatherDetails.sunSet > weatherDetails.date &&
        weatherDetails.date > weatherDetails.sunRise
      ) {
        setAppBg(`to top, #a8edea 0%, #fed6e3 100%`);
      }
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

  function search() {
    let tempUnit = "metric";
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempUnit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleWeather);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherDetails.ready) {
    return (
      <div className="Search">
        <div
          className="card weather"
          style={{ backgroundImage: `linear-gradient(${appBg})` }}
        >
          <form onSubmit={handleSearch}>
            <div className="row">
              <div className="col-10">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
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
                  className="btn btn-outline-dark my-location w-100"
                  value="my-location"
                  onClick={getMyLocation}
                >
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </div>
            </div>
          </form>
          <br />
          <Weather weather={weatherDetails} />
        </div>
      </div>
    );
  } else {
    search();

    return (
      <p>
        <br />
        <MagnifyingGlass
          visible={true}
          height="40"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </p>
    );
  }
}

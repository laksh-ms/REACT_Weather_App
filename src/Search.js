import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";
import { MagnifyingGlass } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";

import "./Search.css";
import day from "./images/day.jpg";
import night from "./images/night.jpg";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [appBg, setAppBg] = useState(``);
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });
  const [appImage, setAppImage] = useState(``);

  function handleWeather(response) {
    let localDate = new Date();
    let timeOffSet = localDate.getTimezoneOffset();
    if (response.status === 200) {
      setWeatherDetails({
        ready: true,
        icon: response.data.weather[0].icon,
        city: response.data.name,
        country: response.data.sys.country,
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
        lastUpdated: response.data.dt * 1000,
        timezone: response.data.timezone + 1000,
        coords: response.data.coord,
      });
      if (
        response.data.sys.sunrise < response.data.dt &&
        response.data.dt < response.data.sys.sunset
      ) {
        setAppBg(`to top, #e14fad 0%, #FFD982 100%`);
        setAppImage(day);
      } else {
        setAppBg(`to top, #004799 0%, #83cef7 100%`);
        setAppImage(night);
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
      <div
        className="Search"
        style={{
          backgroundImage: `url(${appImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `contain`,
          backgroundPosition: `center`,
          width: `100%`,
        }}
      >
        <div
          className="card"
          style={{ background: `linear-gradient(${appBg})` }}
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
          <Weather weather={weatherDetails} />
          <div className="LastUpdated fw-lighter">
            <div className="row">
              <div className="col-6 text-start">
                Last updated:{" "}
                <FormattedDate timestamp={weatherDetails.lastUpdated} />
              </div>
              <div className="col-6 text-end">
                Weather for {weatherDetails.city}
              </div>
            </div>
          </div>
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

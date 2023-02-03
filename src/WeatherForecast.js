import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState({ ready: false });
  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast({ ready: true });
  }
  console.log(props);
  function getForecast() {
    let apiKey = `8402ccd9e55983fce71eeeaa1d2bd1fc`;
    let tempUnit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=${tempUnit}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
  if (forecast.ready) {
    return (
      <div className="WeatherForecast card2">
        <div className="row">
          <div className="col">
            <div className="forecast-day">
              <span>Fri</span>
            </div>
            <div>
              <WeatherIcon icon="01d" size={30} />
            </div>
            <div>
              <span className="maxForecast">20</span>°
              <span className="minForecast">10</span>°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    getForecast();
    return "loading..";
  }
}

import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function getForecast() {
    let apiKey = `8402ccd9e55983fce71eeeaa1d2bd1fc`;
    let tempUnit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&exclude=current,hourly,minutely&appid=${apiKey}&units=${tempUnit}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast card2">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (0 < index && index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay forecastData={dailyForecast} />
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    );
  } else {
    getForecast();
    return "loading..";
  }
}

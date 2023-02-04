import React from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function forecastDay(props) {
  function formatForecastDay() {
    let now = new Date(props.forecastData.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[now.getDay()];
  }
  return (
    <div>
      <div className="forecast-day">
        <span>{formatForecastDay()}</span>
      </div>
      <div>
        <WeatherIcon icon={props.forecastData.weather[0].icon} size={30} />
      </div>
      <div className="forecast-temperature">
        <span className="maxTempForecast">
          <Temperature unit="metric" temp={props.forecastData.temp.max} />°
        </span>
        <span className="minTempForecast">
          <Temperature unit="metric" temp={props.forecastData.temp.min} />°
        </span>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunTime from "./FormattedSunTime";
import Temperature from "./Temperature";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [unit, setUnit] = useState("metric");
  /*let localDate = new Date();
  let timeOffSet = localDate.getTimezoneOffset();
  let cityDate =
    props.weather.date + timeOffSet * 60000 + props.weather.timezone;
  let citySunrise =
    props.weather.sunRise + timeOffSet * 60000 + props.weather.timezone;

  let citySunsets =
    props.weather.sunSet + timeOffSet * 60000 + props.weather.timezone;
*/
  return (
    <div className="Weather">
      <div className="CurrentWeather">
        <h1>
          {props.weather.city}, {props.weather.country}
        </h1>
        <p>
          <FormattedDate timestamp={props.weather.date} /> ⏐{" "}
          <span className="weather-description">
            {props.weather.description}
          </span>
        </p>
        <div className="d-flex justify-content-center">
          <WeatherIcon icon={props.weather.icon} size={80} />
          <span className="temp">
            <Temperature unit={unit} temp={props.weather.temp} />
          </span>
          <span className="unit">
            <a
              href="/"
              className={unit === "metric" ? "active" : "link"}
              onClick={(event) => {
                event.preventDefault();
                setUnit("metric");
              }}
            >
              °C
            </a>
            ⏐
            <a
              href="/"
              className={unit === "imperial" ? "active" : "link"}
              onClick={(event) => {
                event.preventDefault();
                setUnit("imperial");
              }}
            >
              °F
            </a>
          </span>
        </div>
      </div>

      <div className="WeatherDetails">
        <div className="row">
          <div className="col card1">
            <i className="fa-solid fa-temperature-three-quarters"></i> Feels
            like:
            <br />
            <span className="feels-like">
              <Temperature unit={unit} temp={props.weather.feelsLike} />°
            </span>
          </div>
          <div className="col card1">
            <i className="fa-solid fa-sun"></i> Sunrise:
            <br />
            <FormattedSunTime timestamp={props.weather.sunRise} />
          </div>
          <div className="col card1">
            <i className="fa-solid fa-droplet"></i> Humidity:
            <br />
            <span className="humidity">{props.weather.humidity}</span>%
          </div>
        </div>
        <div className="row">
          <div className="col card1">
            <i className="fa-solid fa-temperature-arrow-up"></i> H:
            <span className="temp-max">
              <Temperature unit={unit} temp={props.weather.maxTemp} />°
            </span>
            <br />
            <i className="fa-solid fa-temperature-arrow-down"></i> L:
            <span className="temp-min">
              <Temperature unit={unit} temp={props.weather.minTemp} />°
            </span>
          </div>
          <div className="col card1">
            <i className="fa-solid fa-moon"></i> Sunset:
            <br />
            <FormattedSunTime timestamp={props.weather.sunSet} />
          </div>
          <div className="col card1">
            <i className="fa-solid fa-wind"></i> Wind:
            <br />
            <span className="wind">{props.weather.wind}</span>
            m/s
          </div>
        </div>
      </div>
      <WeatherForecast coords={props.weather.coords} />
    </div>
  );
}

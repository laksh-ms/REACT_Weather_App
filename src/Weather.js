import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunTime from "./FormattedSunTime";
import "./Weather.css";

export default function Weather(props) {
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
        <div className="row city-temp">
          <div className="col-5">
            <span className="temp">{Math.round(props.weather.temp)}</span>
            <span className="temp-unit">
              <a href="/" className="link templink-c active">
                °C
              </a>
              |
              <a href="/" className="link templink-f">
                °F
              </a>
            </span>
          </div>
          <div className="col-7">
            <img
              src={props.weather.icon}
              alt={props.weather.description}
              className="temp-icon"
              width="100"
            />
          </div>
        </div>
      </div>
      <div className="WeatherDetails">
        <div className="row">
          <div className="col card1">
            <i className="fa-solid fa-temperature-three-quarters"></i> Feels
            like:
            <br />
            <span className="feels-like">
              {Math.round(props.weather.feelsLike)}°
            </span>
          </div>
          <div className="col card1">
            <i className="fa-solid fa-temperature-arrow-up"></i> H:
            <span className="temp-max">
              {Math.round(props.weather.maxTemp)}°
            </span>
            <br />
            <i className="fa-solid fa-temperature-arrow-down"></i> L:
            <span className="temp-min">
              {Math.round(props.weather.minTemp)}°
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col card1">
            <i className="fa-solid fa-droplet"></i> Humidity:
            <br />
            <span className="humidity">{props.weather.humidity}</span>%
          </div>
          <div className="col card1">
            <i className="fa-solid fa-wind"></i> Wind:
            <br />
            <span className="wind">{props.weather.wind}</span>
            m/s
          </div>
        </div>
        <div className="row">
          <div className="col card1">
            <i className="fa-solid fa-sun"></i> Sunrise:
            <br />
            <FormattedSunTime timestamp={props.weather.sunRise} />
          </div>
          <div className="col card1">
            <i className="fa-solid fa-moon"></i> Sunset:
            <br />
            <FormattedSunTime timestamp={props.weather.sunSet} />
          </div>
        </div>
      </div>
    </div>
  );
}

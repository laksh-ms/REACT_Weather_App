import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Weather(props) {
  if (props.display) {
    return (
      <div className="Weather">
        <strong>Weather for {props.weather.place}</strong>
        <ul>
          <li>Temperature : {props.weather.temp} °C</li>
          <li>Description : {props.weather.description}</li>
          <li>Humidity : {props.weather.humidity} %</li>
          <li>Wind : {props.weather.wind} meter/sec</li>
          <li>
            <img src={props.weather.icon} alt={props.weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
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

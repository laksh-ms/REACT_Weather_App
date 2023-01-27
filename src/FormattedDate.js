import React from "react";

export default function FormattedDate(props) {
  let now = new Date(props.timestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let mins = now.getMinutes();

  if (hours < 10) {
    hours = "0".concat(`${hours}`);
  }
  if (mins < 10) {
    mins = "0".concat(`${mins}`);
  }
  return (
    <span>
      {day}, {hours}:{mins}
    </span>
  );
}

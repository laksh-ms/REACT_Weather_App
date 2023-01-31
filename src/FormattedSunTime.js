import React from "react";

export default function FormattedSunTime(props) {
  let now = new Date(props.timestamp);
  let hours = now.getHours();
  let mins = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }

  return (
    <span>
      {hours}:{mins}
    </span>
  );
}

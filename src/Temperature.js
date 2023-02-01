import React from "react";

export default function Temperature(props) {
  return (
    <span>
      {props.unit === `metric`
        ? Math.round(props.temp)
        : Math.round((props.temp * 9) / 5 + 32)}
    </span>
  );
}

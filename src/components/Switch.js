import React from "react";

export function Switch(props) {
  const toggleSwitch = () => {
    props.onHandleChange();
  };

  return (
    <label className="switch">
      <strong>{props.switchName}</strong>
      <input
        type="checkbox"
        onChange={toggleSwitch}
        checked={props.isPowerOn ? "checked" : null}
      />
      <span className="theme"></span>
    </label>
  );
}

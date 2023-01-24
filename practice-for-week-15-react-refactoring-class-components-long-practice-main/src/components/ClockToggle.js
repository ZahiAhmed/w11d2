import React from "react";

const ClockToggle = (props) => {
    return (
      <button 
        type="button"
        className="clock-toggle" 
        onClick={props.toggleClock}
      >
        Toggle Clock
      </button>
    )
  }

export default ClockToggle;
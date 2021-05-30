import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ title, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const onBodyClick = (event) => {
    // If element that was clicked (event.target) is inside component (ref.current) than return early
    if (ref.current?.contains(event.target)) {
      return;
    }
    // otherwise close dropdown
    setOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick);
    // Remove event listener whenever component is about to be removed from DOM (similar to componentWillUnmount).
    // Otherwise after toggle ref.current does not exist and causes error on body click
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{title}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <div className="text">{selected.label}</div>
          <i className="dropdown icon"></i>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

// Regular JS events like addEventListener("click") are processed before React events like onClick.
// Remember, events bubbling up.
// Contains method available for all DOM elements.
// UseEffect leverages return function to clean-up as follows: whenever it is about to get unmounted from DOM, the clean-up function will be called.

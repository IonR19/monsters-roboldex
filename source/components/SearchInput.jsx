import React from "react";

import "./SearchInput.css";

export default function SearchInput(props) {
  const { placeholder, handleChange } = props;
  return (
    <input
      className="search"
      type="search"
      name="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

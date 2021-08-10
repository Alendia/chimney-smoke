import React from "react";
import "./style.css"

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input htmlFor="search" type="text" id="search" placeholder="nice food"></input>
    </div>
  );
}

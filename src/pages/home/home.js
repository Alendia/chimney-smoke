import React from "react";
import SearchBar from "../../components/searchBar/searchBar";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <SearchBar className="home-search-bar" />
    </div>
  );
}

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

class SearchBar extends Component {
  handleSearch = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="SearchBar__container">
        <FontAwesomeIcon icon={faSearch} className="SearchBar__icon" />
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="SearchBar__input"
          onChange={e => this.handleSearch(e)}
        />
      </div>
    );
  }
}

export default SearchBar;

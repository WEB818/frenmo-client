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
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="SearchBar__input"
          onChange={e => this.handleSearch(e)}
        />
        <button className="SearchBar__button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default SearchBar;

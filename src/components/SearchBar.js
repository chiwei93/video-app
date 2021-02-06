import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>

          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

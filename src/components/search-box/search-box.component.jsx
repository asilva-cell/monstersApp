import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
	<input
        className="search"
        name = 'searchField'
		type="search"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);

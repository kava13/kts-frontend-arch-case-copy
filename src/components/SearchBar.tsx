import React, { useState } from "react";
import "../styles/SearchBar.css";
import { NewsStore } from "../stores/NewsStore";

interface SearchBarProps {
  newsStore: NewsStore;
}

const SearchBar: React.FC<SearchBarProps> = ({ newsStore }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    newsStore.setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search news..."
    />
  );
};

export default SearchBar;

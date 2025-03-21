import React from "react";
import "../styles/search.css";

interface SearchBarProps {
  openSearch: boolean;
  toggleSearchBtn: () => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchBarProps> = ({
  openSearch,
  toggleSearchBtn,
  query,
  setQuery,
}) => {
  return (
    <div className="searchBar">
      <button
        id="searchBtn"
        className="icon-search"
        aria-label="Pesquisar"
        onClick={toggleSearchBtn}
      ></button>
      <input
        className={`${openSearch ? "openSearch" : ""}`}
        id="searchInput"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("Pesquisa concluída:", query);
          }
        }}
      />
    </div>
  );
};

export default Search;

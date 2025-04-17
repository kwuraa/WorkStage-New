import React, { useEffect, useState } from "react";
import "../styles/search.css";

interface Product {
  id: number;
  nome: string;
  data_cadastro: string;
  status: string;
  tem_nf: boolean;
}
interface SearchBarProps {
  openSearch: boolean;
  setResults: React.Dispatch<React.SetStateAction<Product[]>>;
  toggleSearchBtn: () => void;
}

export const Search: React.FC<SearchBarProps> = ({
  openSearch,
  toggleSearchBtn,
  setResults,
}) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (!openSearch) {
      setInput("");
      setResults([]);
    }
  }, [openSearch, setResults]);

  const fetchData = async (value: string) => {
    try {
      const response = await fetch("http://localhost:3000/produtos");
      if (!response.ok) throw new Error("Erro ao buscar dados");

      const json: Product[] = await response.json();

      // Filtrar os produtos com base no valor da pesquisa
      const results = json.filter(
        (prod) =>
          value &&
          prod.nome &&
          prod.nome.toLowerCase().includes(value.toLowerCase())
      );
      console.log(results);
      setResults(results);
    } catch (error) {
      console.error("Erro na busca:", error);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

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
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;

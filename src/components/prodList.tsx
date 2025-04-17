import React, { useState, useEffect } from "react";
import { fetchProd, Prod } from "../services/api";
import { io } from "socket.io-client";
import "../styles/prodList.css";

const socket = io("http://localhost:5000");

interface ItemListProps {
  onSelectItem: (item: Prod) => void;
  open: boolean;
  openSearch: boolean;
  results: Prod[];
}

const ItemList: React.FC<ItemListProps> = ({
  onSelectItem,
  open,
  openSearch,
  results,
}) => {
  const [prods, setProds] = useState<Prod[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      if (!openSearch) {
        const data = await fetchProd();
        setProds(data);
      }
    };

    loadItems();

    socket.on("novo_produto", (novoProduto: Prod) => {
      setProds((prevProds) => [novoProduto, ...prevProds]);
    });

    return () => {
      socket.off("novo_produto");
    };
  }, [openSearch]);

  const displayedProds = openSearch ? results : prods;

  return (
    <div
      className={`contentProductList ${open ? "pushList" : ""} ${
        openSearch ? "downList" : ""
      }`}
    >
      <ul>
        <div className="contentItemList" id="contentItemList">
          {displayedProds.length > 0 ? (
            displayedProds.map((prod) => (
              <li
                className="infos"
                key={prod.id}
                onClick={() => onSelectItem(prod)}
              >
                <span
                  className="nf"
                  id="temNF"
                  style={{
                    color: prod.tem_nf ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {prod.tem_nf ? "NF: ✔️" : "NF: ❌"}
                </span>
                <span className="name" id="produto">
                  {prod.nome}
                </span>
                <span className="date" id="dataCadastro">
                  {new Date(prod.data_cadastro)
                    .toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .split("/")
                    .join(" / ")}
                </span>
                <span className="stats" id="status">
                  {prod.status}
                </span>
              </li>
            ))
          ) : (
            <p className="warningMsg">Nenhum produto encontrado</p>
          )}
        </div>
      </ul>
    </div>
  );
};

export default ItemList;

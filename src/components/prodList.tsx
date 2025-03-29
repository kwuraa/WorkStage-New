import React, { useState, useEffect } from "react";
import { fetchProd, Prod } from "../services/api";
import "../styles/prodList.css";

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
  const [prods, setProd] = useState<Prod[]>([]);

  useEffect(() => {
    if (!openSearch) {
      const loadItems = async () => {
        const data = await fetchProd();
        setProd(data);
      };
      loadItems();
    }
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
                <span className="idproduct" id="idProduto">
                  {prod.id}
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

import React, { useState, useEffect } from "react";
import { fetchProd, Prod } from "../services/api";
import "../styles/prodList.css";

interface ItemListProps {
  onSelectItem: (item: Prod) => void;
  open: boolean;
  openSearch: boolean;
}

const ItemList: React.FC<ItemListProps> = ({
  onSelectItem,
  open,
  openSearch,
}) => {
  const [prods, setprod] = useState<Prod[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchProd();
      setprod(data);
    };

    loadItems();
  }, []);

  return (
    <div
      className={`contentProductList ${open ? "pushList" : ""} ${
        openSearch ? "downList" : ""
      }`}
    >
      <ul>
        <div className="contentItemList" id="contentItemList">
          {prods.map((prod) => (
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
                {prod.data_cadastro}
              </span>
              <span className="stats" id="status">
                {prod.status}
              </span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ItemList;

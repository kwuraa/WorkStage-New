import React, { useState, useEffect } from "react";
import { fetchProd, Prod } from "../services/api";
import "../styles/prodList.css";

interface ItemListProps {
  onSelectItem: (item: Prod) => void;
}

const ItemList: React.FC<ItemListProps> = ({ onSelectItem }) => {
  const [prods, setprod] = useState<Prod[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchProd();
      setprod(data);
    };

    loadItems();
  }, []);

  return (
    <div className="contentProductList">
      <ul>
        <div className="contentItemList" id="contentItemList">
          {prods.map((prod) => (
            <li
              className="infos"
              key={prod.id}
              onClick={() => onSelectItem(prod)}
            >
              <span id="idProduto">{prod.id}</span>
              <span id="produto">{prod.nome}</span>
              <span id="dataCadastro">{prod.data_cadastro}</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ItemList;

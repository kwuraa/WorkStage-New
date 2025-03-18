import React from "react";
import "../styles/menuBar.css";

interface MenuBarProps {
  open: boolean;
  toggleMenuBar: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ open, toggleMenuBar }) => {
  const disableBtn = open ? "" : "disableBtn";

  return (
    <div className={`menuBar ${open ? "open" : "closed"}`}>
      <div className="BtnContainer">
        <button
          className={`buttons ${open ? "icon-menu_close" : "icon-menu"}`}
          onClick={toggleMenuBar}
        >
          <span className="label">Menu</span>
        </button>
        <button className={`buttons icon-add_circle ${disableBtn}`}>
          <span className="label">Adicionar</span>
        </button>
        <button className={`buttons icon-history ${disableBtn}`}>
          <span className="label">Recentes</span>
        </button>
        <button className={`buttons icon-trash ${disableBtn}`}>
          <span className="label">Lixeira</span>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;

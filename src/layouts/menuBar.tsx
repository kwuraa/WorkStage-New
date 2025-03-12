import React from "react";
import "../styles/menuBar.css";

const MenuBar: React.FC = () => {
  return (
    <div className="menuBar">
      <button className="buttons">add</button>
      <button className="buttons">recent</button>
      <button className="buttons">trash</button>
    </div>
  );
};

export default MenuBar;

import React from "react";
import "../styles/header.css";

interface HeaderProps {
  open: boolean;
}

const Header: React.FC<HeaderProps> = ({ open }) => {
  return (
    <div className={`headerInfos ${open ? "pushHeader" : ""}`}>
      <span className="id">ID</span>
      <span className="produtos">Produtos</span>
      <span className="cadastro">Data de Cadastro</span>
      <span className="status">Status</span>
    </div>
  );
};

export default Header;

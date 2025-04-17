import React from "react";
import "../styles/header.css";

interface HeaderProps {
  open: boolean;
  openSearch: boolean;
}

const Header: React.FC<HeaderProps> = ({ open, openSearch }) => {
  return (
    <div
      className={`headerInfos ${open ? "pushHeader" : ""} ${
        openSearch ? "downHeader" : ""
      }`}
    >
      <span className="id">NF</span>
      <span className="produtos">Produtos</span>
      <span className="cadastro">Data de Cadastro</span>
      <span className="status">Status</span>
    </div>
  );
};

export default Header;

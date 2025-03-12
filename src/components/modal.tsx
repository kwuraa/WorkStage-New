import React from "react";
import { Prod } from "../services/api";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Prod | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Detalhes do Item</h2>
        <p>
          <strong>ID:</strong> {item.id}
        </p>
        <p>
          <strong>Nome:</strong> {item.nome}
        </p>
        <p>
          <strong>Data:</strong> {item.data_cadastro}
        </p>
        <p>
          <strong>Status:</strong> {item.status}
        </p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;

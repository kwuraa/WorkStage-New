import React, { useState } from "react";
import "../styles/addItemModal.css";

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (
    nome: string,
    processos: string[],
    descricao: string,
    tem_nf: boolean
  ) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [name, setName] = useState("");
  const [processos, setProcesses] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [hasNF, setHasNF] = useState(false);
  const { isActive, setIsActive } = useState(false);
  const [value, setValue] = useState("");

  if (!isOpen) return null;

  const addProcessInput = () => {
    setProcesses([...processos, ""]);
  };

  const handleProcessChange = (index: number, value: string) => {
    const updatedProcesses = [...processos];
    updatedProcesses[index] = value;
    setProcesses(updatedProcesses);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(name, processos, description, hasNF);
    setName("");
    setProcesses([]);
    setDescription("");
    setHasNF(false);
    onClose();
  };

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="float-label">
            {" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className={isActive ? "active" : ""}>
              Name
            </label>
          </div>

          <label>
            <input
              type="checkbox"
              checked={hasNF}
              onChange={(e) => setHasNF(e.target.checked)}
            />
            NF
          </label>

          <div className="process-section">
            <label>Processos:</label>
            {processos.map((processos, index) => (
              <div key={index} className="process-input">
                <input
                  type="text"
                  value={processos}
                  onChange={(e) => handleProcessChange(index, e.target.value)}
                  placeholder={`Processo ${index + 1}`}
                />
              </div>
            ))}
            <button type="button" onClick={addProcessInput}>
              Adicionar Processo
            </button>
          </div>

          <label>
            Descrição:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button type="submit">Adicionar</button>
        </form>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default AddItemModal;

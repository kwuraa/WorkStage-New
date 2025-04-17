import React, { useState } from "react";
import "./styles/App.css";
import TitleBar from "./layouts/titlebar";
import Modal from "./components/modal";
import { Prod, addProd } from "./services/api";
import ProdList from "./components/prodList";
import MenuBar from "./layouts/menuBar";
import Header from "./layouts/header";
import Search from "./components/search";
import AddItemModal from "./components/addModal";
import { AxiosError } from "axios";

const App: React.FC = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Prod | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [results, setResults] = useState<Prod[]>([]);

  const toggleMenuBar = (): void => {
    if (!open) {
      setOpenSearch(false);
    }
    setOpen((prev) => !prev);
  };

  const toggleSearchBtn = (): void => {
    setOpen(false);
    setOpenSearch((prev) => {
      return !prev;
    });
  };

  const openModal = (item: Prod) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const handleAddItem = async (
    name: string,
    processes: string[],
    description: string,
    tem_nf: boolean
  ) => {
    const NewProd = {
      nome: name,
      descricao: description,
      tem_nf,
      processos: processes.map((processo) => ({ nome: processo })),
    };

    try {
      await addProd(NewProd);
    } catch (error) {
      const err = error as AxiosError;
      console.error(
        "❌ Erro ao adicionar item:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div className="mainApp">
      <TitleBar />
      <MenuBar
        open={open}
        toggleMenuBar={toggleMenuBar}
        openAddModal={openAddModal}
      />
      <div className="contentArea">
        <Search
          openSearch={openSearch}
          toggleSearchBtn={toggleSearchBtn}
          setResults={setResults}
        />
        <Header open={open} openSearch={openSearch} />
        <ProdList
          open={open}
          openSearch={openSearch}
          onSelectItem={openModal}
          results={results}
        />
        <AddItemModal
          isOpen={addModalOpen}
          onClose={() => setAddModalOpen(false)}
          onAdd={handleAddItem}
        />
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          item={selectedItem}
        />
      </div>
    </div>
  );
};

export default App;

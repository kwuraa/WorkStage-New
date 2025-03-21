import React, { useState } from "react";
import "./styles/App.css";
import TitleBar from "./layouts/titlebar";
import Modal from "./components/modal";
import { Prod } from "./services/api";
import ProdList from "./components/prodList";
import MenuBar from "./layouts/menuBar";
import Header from "./layouts/header";
import Search from "./components/search";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Prod | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [query, setQuery] = useState("");

  const toggleMenuBar = (): void => {
    if (!open) {
      setOpenSearch(false);
    }
    setOpen((prev) => !prev);
  };

  const toggleSearchBtn = (): void => {
    setOpen(false);
    setOpenSearch((prev) => {
      if (prev) setQuery("");
      return !prev;
    });
  };

  const openModal = (item: Prod) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
  return (
    <div className="mainApp">
      <TitleBar />
      <MenuBar open={open} toggleMenuBar={toggleMenuBar} />
      <div className="contentArea">
        <Search
          openSearch={openSearch}
          toggleSearchBtn={toggleSearchBtn}
          query={query}
          setQuery={setQuery}
        />
        <Header open={open} openSearch={openSearch} />
        <ProdList
          open={open}
          openSearch={openSearch}
          onSelectItem={openModal}
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

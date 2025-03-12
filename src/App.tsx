import React, { useState } from "react";
import "./styles/App.css";
import TitleBar from "./layouts/titlebar";
import Modal from "./components/modal";
import { Prod } from "./services/api";
import ProdList from "./components/prodList";
import MenuBar from "./layouts/menuBar";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Prod | null>(null);

  const openModal = (item: Prod) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
  return (
    <div className="mainApp">
      <TitleBar />
      <MenuBar />
      <div className="contentArea">
        <ProdList onSelectItem={openModal} />
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

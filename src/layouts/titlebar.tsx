import { useEffect, useRef } from "react";
import { ipcRenderer } from "electron";
import "../styles/titlebar.css";

function TitleBar() {
  const minimizeBtnRef = useRef<HTMLButtonElement>(null);
  const maxResBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const minimizeBtn = minimizeBtnRef.current;
    const maxResBtn = maxResBtnRef.current;
    const closeBtn = closeBtnRef.current;

    if (!minimizeBtn || !maxResBtn || !closeBtn) return;

    // Função para alterar o estado do botão de maximizar/restaurar
    const changeMaxResBtn = (isMaximizedApp: boolean) => {
      if (isMaximizedApp) {
        maxResBtn.title = "Restore";
        maxResBtn.classList.remove("maximizeBtn");
        maxResBtn.classList.add("restoreBtn");
      } else {
        maxResBtn.title = "Maximize";
        maxResBtn.classList.remove("restoreBtn");
        maxResBtn.classList.add("maximizeBtn");
      }
    };

    // Funções de controle
    const handleMinimize = () => {
      ipcRenderer.send("minimizeApp");
    };

    const handleMaximizeRestore = () => {
      ipcRenderer.send("maximizeRestoreApp");
    };

    const handleClose = () => {
      ipcRenderer.send("closeApp");
    };

    // Adiciona os event listeners
    minimizeBtn.addEventListener("click", handleMinimize);
    maxResBtn.addEventListener("click", handleMaximizeRestore);
    closeBtn.addEventListener("click", handleClose);

    // Recebe mensagens do processo principal e altera o botão
    ipcRenderer.on("isMaximized", () => {
      changeMaxResBtn(true);
    });
    ipcRenderer.on("isRestored", () => {
      changeMaxResBtn(false);
    });

    // Cleanup: remove os listeners quando o componente desmontar
    return () => {
      minimizeBtn.removeEventListener("click", handleMinimize);
      maxResBtn.removeEventListener("click", handleMaximizeRestore);
      closeBtn.removeEventListener("click", handleClose);
      ipcRenderer.removeAllListeners("isMaximized");
      ipcRenderer.removeAllListeners("isRestored");
    };
  }, []);

  return (
    <>
      <div className="topBar">
        <div className="titleBar">
          <div className="title">WorkStages</div>
          <div className="titleBarBtns">
            <button
              ref={minimizeBtnRef}
              id="minimizeBtn"
              className="topBtn minimizeBtn"
              title="Minimizar"
            ></button>
            <button
              ref={maxResBtnRef}
              id="maxResBtn"
              className="topBtn maximizeBtn"
              title="Maximizar"
            ></button>
            <button
              ref={closeBtnRef}
              id="closeBtn"
              className="topBtn closeBtn"
              title="Close"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleBar;


# 🖥️ WorkStage - New

WorkStage é um aplicativo desenvolvido com **React** e **Electron** para gerenciar o progresso de produção. Ele permite cadastrar produtos, acompanhar suas etapas e visualizar o status em tempo real. Com foco em organização e eficiência, o app visa otimizar o fluxo de trabalho, oferecendo um controle simples e prático das fases de produção.

## 🚀 Tecnologias Utilizadas

- **Electron**: Framework para criação de aplicativos desktop.
- **React com TypeScript**: Biblioteca para construção de interfaces modernas e reativas com tipagem estática.
- **TSX e CSS**: Para a construção dos componentes e estilização da interface.

## 🛠️ Funcionalidades

- 📋 Cadastro de produtos para rastreamento do progresso de produção.
- 🔄 Atualização de status de cada etapa de produção.
- 📊 Visualização em tempo real do andamento da produção.

## 📂 Estrutura do Projeto

```
WorkStage/
├── backend/
│   ├── Config/             # Configurações do sistema
│   ├── controllers/        # Lógica de controle e gerenciamento de dados
│   ├── db/                 # Configuração do banco de dados
│   ├── routes/             # Rotas da API
│   ├─ app.js               # Arquivo principal da aplicação
│   └─ package.json         # Dependências e scripts do backend
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   ├── Layouts/            # Layouts da aplicação
│   ├── Services/           # Serviços da aplicação
│   ├── Styles/             # Estilos da aplicação
│   ├──	main.tsx            # Arquivo principal que do React
│   ├── App.js              # Componente principal da aplicação
│   ├── index.js            # Ponto de entrada do React
│   └── assets/             # Arquivos estáticos (imagens, icons, ...)
├── electron/
│   ├── main.ts             # Arquivo principal do Electron (processo main)
│   ├── preload.ts          # Script de preload para expor APIs seguras ao renderer
├── package.json            # Configurações e dependências do projeto
└── README.md               # Documentação e informações sobre o projeto
```

## 📋 Pré-requisitos

Para executar o WorkStage localmente, você precisará de:

- **Node.js** instalado
- **Electron** instalado globalmente (`npm install -g electron`)

### Passos para rodar o projeto

1. Clone este repositório:
    
    ```sh
    git clone https://github.com/kwuraa/WorkStage-New.git
    cd WorkStage
    ```
    
2. Instale as dependências:
    
    ```sh
    npm install
    ```
    
3. Inicie o aplicativo:
    
    ```sh
    npm start
    ```
    

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

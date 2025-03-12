import axios from "axios";

export interface Prod {
  id: number;
  nome: string;
  data_cadastro: string;
  status: string;
}

// Função para buscar os itens da API
export const fetchProd = async (): Promise<Prod[]> => {
  try {
    const response = await axios.get("http://localhost:3000/produtos");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};

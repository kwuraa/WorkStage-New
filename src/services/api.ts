import axios from "axios";

export interface Prod {
  id: number;
  nome: string;
  data_cadastro: string;
  status: string;
}

// Função para formatar data
function formatDate(dataStr: Date | string | Date): string {
  const date = new Date(dataStr);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
}

// Função para buscar os itens da API
export const fetchProd = async (): Promise<Prod[]> => {
  try {
    const response = await axios.get("http://localhost:3000/produtos");

    const products = response.data.map((products: Prod) => ({
      ...products,
      data_cadastro: formatDate(products.data_cadastro),
    }));
    return products;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};

import axios from "axios";

export interface Prod {
  id: number;
  nome: string;
  data_cadastro: string;
  status: string;
}

export const fetchProd = async (): Promise<Prod[]> => {
  try {
    const response = await axios.get("http://localhost:3000/produtos");

    const products = response.data.map((products: Prod) => ({
      ...products,
      data_cadastro: products.data_cadastro,
    }));
    return products;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};

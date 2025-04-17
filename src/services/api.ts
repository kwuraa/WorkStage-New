import axios from "axios";

export interface NewProd {
  nome: string;
  descricao: string;
  processos: { nome: string }[];
}

export interface Prod {
  tem_nf: any;
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

export const addProd = async (newProd: NewProd): Promise<Prod> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/produtos",
      newProd,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data as Prod;
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
    throw error;
  }
};

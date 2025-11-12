import { Product } from "@/models/product.interface";

const API_URL = process.env.API_URL; 

export const productService = {
    async getAll(): Promise<Product[]> {
        const response = await fetch(`${API_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

    if (!response.ok) 
      throw new Error("Erro ao buscar produtos");
    

    return response.json();
  }
}
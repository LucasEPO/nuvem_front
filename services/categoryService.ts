import { Category } from "@/models/category.interface";

const API_URL = process.env.API_URL; 

export const categoryService = {
    async getAll(): Promise<Category[]> {
        const response = await fetch(`${API_URL}/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

    if (!response.ok) 
      throw new Error("Erro ao buscar categorias");
    

    return response.json();
  }
}
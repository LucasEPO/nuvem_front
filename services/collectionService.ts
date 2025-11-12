import { Collection } from "@/models/collection.interface";

const API_URL = process.env.API_URL; 

export const collectionService = {
    async getAll(): Promise<Collection[]> {
        const response = await fetch(`${API_URL}/collections`, {
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
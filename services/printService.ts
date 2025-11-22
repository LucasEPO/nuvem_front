import { Print } from "@/models/print.interface";

const API_URL = process.env.API_URL; 

export const printService = {
    async getAll(): Promise<Print[]> {
        const response = await fetch(`${API_URL}/prints`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

    if (!response.ok) 
      throw new Error("Erro ao buscar estampas");
    

    return response.json();
  }
}
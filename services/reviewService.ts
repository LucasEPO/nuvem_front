import { Review } from "@/models/review.interface";

const API_URL = process.env.API_URL; 

export const reviewService = {
    async getAll(): Promise<Review[]> {
        const response = await fetch(`${API_URL}/reviews`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

    if (!response.ok) 
      throw new Error("Erro ao buscar reviews");
    

    return response.json();
  }
}
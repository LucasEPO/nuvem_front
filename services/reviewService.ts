import { Review } from "@/models/review.interface";
import { userService } from "./userService";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL; 

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
  },

  async create(data: { rating: number; description: string }): Promise<Review> {
    const email = sessionStorage.getItem("user_email");

    if(!email) {
      alert("Você deve fazer login para fazer uma avaliação!");
      redirect("/signup");
    }

    const user = await userService.getOne(email);

    if(!user) 
      throw new Error("Erro ao buscar usuário");

    const response = await fetch(`${API_URL}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...data, fk_review_user: user.user_id}),
    });

    if (!response.ok) 
      throw new Error("Erro ao criar avaliação");

    return response.json();
  }
}
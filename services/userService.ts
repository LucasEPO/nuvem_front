import { User } from "@/models/user.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL; 

export const userService = {
    async getOne(email: string): Promise<User> {
        const response = await fetch(`${API_URL}/users/${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) 
            throw new Error("Erro ao buscar usuário");
        
        return response.json();
    },

    async create(data: { name: string; email: string; password: string }): Promise<User> {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) 
            throw new Error("Erro ao criar usuário");

        return response.json();
    }
}
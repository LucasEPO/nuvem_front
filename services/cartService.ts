import { Cart } from "@/models/cart.interface";
import { userService } from "./userService";

const API_URL = process.env.NEXT_PUBLIC_API_URL; 

export const cartService = {
    async getCartFromUser(): Promise<Cart | null> {
        const email = sessionStorage.getItem("user_email");

        if(!email) 
            return null;

        const user = await userService.getOne(email);

        if(!user) 
            return null;

        const response = await fetch(`${API_URL}/carts/user/${user.user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json" 
            },
        });

        if(!response.ok)
            return await cartService.create(user.user_id);

        return response.json();
    },

    async create(userId: string): Promise<Cart> {
        const response = await fetch(`${API_URL}/carts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fk_cart_user: userId,
            }),
        });

        if (!response.ok) 
            throw new Error("Erro ao criar carrinho");

        return response.json();
    }
}
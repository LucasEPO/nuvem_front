import { CartItem } from "@/models/cart-item.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL; 

export const cartItemService = {
    async create({
        cartId,
        productId,
        printId,
        quantity = 1
    }: {
        cartId: string;
        productId?: string;
        printId?: number;
        quantity?: number;
    }): Promise<CartItem> {

        if (!cartId) 
            throw new Error("Nenhum carrinho associado ao usuário.");
        
        if (!productId && !printId) 
            throw new Error("É necessário informar productId ou printId para criar um item.");

        const payload = {
            fk_cart_item_cart: cartId,
            fk_cart_item_product: productId ?? null,
            fk_cart_item_print: printId ?? null,
            quantity
        };

        const response = await fetch(`${API_URL}/cart-itens`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) 
            throw new Error("Erro ao adicionar item ao carrinho");
        
        return response.json();
    },

    async update(cartItemId: string, quantity: number): Promise<CartItem> {
        const response = await fetch(`${API_URL}/cart-itens/${cartItemId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity })
        });

        if (!response.ok)
            throw new Error("Erro ao atualizar quantidade do item");

        return response.json();
    },

    async delete(cartItemId: string): Promise<void> {
        const response = await fetch(`${API_URL}/cart-itens/${cartItemId}`, {
            method: "DELETE"
        });

        if (!response.ok)
            throw new Error("Erro ao remover item do carrinho");
    }
};
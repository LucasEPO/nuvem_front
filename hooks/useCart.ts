"use client";

import { useEffect, useState } from "react";
import { cartService } from "@/services/cartService";
import { Cart } from "@/models/cart.interface";

export function useCart() {
    const [cart, setCart] = useState<Cart | null>(null);

    useEffect(() => {
        async function loadCart() {
            const cart = await cartService.getCartFromUser();
            setCart(cart);
        }

        loadCart();
    }, []);

    return cart;
}
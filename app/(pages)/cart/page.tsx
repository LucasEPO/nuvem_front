"use client";

import { useEffect, useState } from "react";
import { cartService } from "@/services/cartService";
import { Cart } from "@/models/cart.interface";
import Link from "next/link";
import { CartItem } from "@/models/cart-item.interface";
import { FaTrash } from "react-icons/fa6";

export default function CartPage() {
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const response = await cartService.getCartFromUser();
                setCart(response);
            } catch (error) {
                console.error("Erro ao carregar carrinho", error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    if (loading) return <div className="p-6 text-center">Carregando carrinho...</div>;
    if (!cart || !cart.cart_itens?.length) return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
            <Link 
                href="/"
                className="text-blue-600 underline"
            >
                Voltar às compras
            </Link>
        </div>
    );

    const handleRemove = async (cartItemId: string) => {
        // implementar depois no service
        console.log("Remover item", cartItemId);
    };

    return (
        <div className="max-w-[80%] mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-black">Meu Carrinho</h1>
            <div className="flex justify-end mb-6">
                <button
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer"
                    onClick={() => console.log("Finalizar compra")}
                >
                    Finalizar Compra
                </button>
            </div>

            <div className="space-y-4">
                {cart.cart_itens.map((item: CartItem) => (
                    <div 
                        key={item.cart_item_id}
                        className="flex items-center gap-4 p-4 border rounded-xl shadow-sm"
                    >
                        <img 
                            src={item.product?.image_url || "/placeholder.png"} 
                            alt={item.product?.name}
                            className="w-20 h-20 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-gray-800">{item.product?.name}</h2>
                            <p className="text-gray-800">Quantidade: {item.quantity}</p>
                            <p className="text-gray-900 font-bold">
                                R$ {item.product?.price}
                            </p>
                        </div>

                        <button
                            onClick={() => handleRemove(item.cart_item_id)}
                            className="p-2 gap-2 flex items-center justify-center text-red-600 border border-red-600 bg-transparent hover:bg-[#ad00002c] rounded-xl cursor-pointer"
                        >
                            <FaTrash />
                            <span>Remover</span>
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-center my-5">
                <Link 
                    href="/"
                    className="text-blue-600 hover:text-blue-700 underline font-bold"
                >
                    Voltar às compras
                </Link>
            </div>
        </div>
    );
}
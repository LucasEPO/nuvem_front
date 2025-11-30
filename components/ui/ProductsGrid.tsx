"use client";

import { Product } from "@/models/product.interface";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

interface Props {
  products: Product[];
  onAddProduct: () => void;
}

export default function ProductsGrid({ products, onAddProduct }: Props) {

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const isAdm = sessionStorage.getItem("is_adm");

        if(isAdm)
            setIsAdmin(true);
        
    }, []);

    return (
        <section className="flex-1 p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center">Produtos</h1>
                {isAdmin && 
                    <button
                        className="flex items-center gap-2 border border-green-600 text-green-600 rounded-lg px-3 py-2 hover:bg-green-600 hover:text-white transition text-sm font-semibold cursor-pointer"
                        onClick={onAddProduct}
                    >
                        <span className="text-lg font-bold">+</span>
                        <span className="hidden sm:inline">Adicionar Produto</span>
                    </button>
                }
            </div>

            <div className="flex flex-row flex-wrap justify-start gap-8">
                {products.map(product => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </section>
    );
}

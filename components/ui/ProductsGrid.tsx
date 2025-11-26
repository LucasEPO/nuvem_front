"use client";

import { Product } from "@/models/product.interface";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductsGrid({ products }: Props) {
    return (
        <section className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Produtos</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </section>
    );
}

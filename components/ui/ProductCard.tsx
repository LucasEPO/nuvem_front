'use client'
import Image from "next/image";
import imagePlaceholder from "@/public/assets/image_placeeholder.svg"
import ProductCardButtons from "./ProductCardButtons";
import { FaShoppingCart } from "react-icons/fa";

interface productCardProps {
    product?: any
}

export default function ProductCard({ product }: productCardProps) {
    return(
        <div className="group flex flex-col w-[220px] h-full p-3 bg-white rounded-lg shadow-sm relative overflow-hidden mt-5 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-lg max-md:w-40 max-md:p-[15px]">
            <Image
                src={imagePlaceholder}
                alt="Imagem do produto"
                className="w-full h-[180px] object-contain mb-3 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 max-md:h-[140px]"
            />
            <p className="flex items-center justify-center text-[16px] font-semibold h-min-[48px] text-[#333] lh-[1.3] max-md:h-min-[40px] max-md:text-sm">
                teste nome produto - colecao x
            </p>
            <span className="block self-start text-[18px] font-bold text-[#e63946] mt-2.5 mb-3.5">R$xx,xx</span>
            <div className="flex flex-col gap-3 mt-auto">
                <ProductCardButtons label="Comprar Agora" variant="primary"/>
                <ProductCardButtons label="Add ao carrinho" variant="secondary" icon={FaShoppingCart}/>
            </div>
        </div>
    );
};

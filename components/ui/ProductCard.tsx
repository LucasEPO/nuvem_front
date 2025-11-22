'use client'
import Image from "next/image";
import imagePlaceholder from "@/public/assets/image_placeeholder.svg"
import ProductCardButtons from "./ProductCardButtons";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "@/models/product.interface";
import { cartService } from "@/services/cartService";
import { Cart } from "@/models/cart.interface";
import { cartItemService } from "@/services/cartItemService";

interface productCardProps {
    product: Product
}

export default function ProductCard({ product }: productCardProps) {
    async function handleAddCart() {
        const cart: Cart | null = await cartService.getCartFromUser();

        const existingItem = cart?.cart_itens?.find(i => i.product?.product_id === product.product_id);

        if (existingItem) {
            await cartItemService.update(existingItem.cart_item_id, existingItem.quantity ? existingItem.quantity + 1 : 1);
            return;
        }

        if(!cart) return;

        await cartItemService.create({cartId: cart.cart_id, productId: product.product_id, quantity: 1});
    }

    return(
        <div className="group flex flex-col w-[220px] h-full p-3 bg-white rounded-lg shadow-sm relative overflow-hidden mt-5 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-lg max-md:w-40 max-md:p-[15px]">
            <Image
                src={product.image_url ?? imagePlaceholder}
                alt={product.description ?? "Produto"}
                loading="lazy"
                placeholder="blur"
                blurDataURL="assets/image_placeholder.svg"
                width={220}
                height={180}
                className="w-full h-[180px] object-contain mb-3 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 max-md:h-[140px]"
            />
            <p className="flex items-center justify-center text-[16px] font-semibold h-min-[48px] text-[#333] lh-[1.3] max-md:h-min-[40px] max-md:text-sm">
                {`${product.name} - Coleção ${product.collection.name}`}
            </p>
            <span className="block self-start text-[18px] font-bold text-[#e63946] mt-2.5 mb-3.5">
                R$ {product.price.toString().replace('.', ',')}
            </span>
            <div className="flex flex-col gap-3 mt-auto">
                <ProductCardButtons label="Comprar Agora" variant="primary"/>
                <ProductCardButtons label="Add ao carrinho" variant="secondary" icon={FaShoppingCart} onClick={handleAddCart}/>
            </div>
        </div>
    );
};

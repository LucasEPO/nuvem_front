import { Category } from "@/models/category.interface";
import { Collection } from "@/models/collection.interface";
import { Print } from "@/models/Print.interface";
import { Product } from "@/models/product.interface";
import { Review } from "@/models/review.interface";
import { categoryService } from "@/services/categoryService";
import { collectionService } from "@/services/collectionService";
import { printService } from "@/services/printService";
import { productService } from "@/services/productService";
import { reviewService } from "@/services/reviewService";

export async function loadHomeData(): Promise<{
    categories: Category[];
    collections: Collection[];
    prints: Print[];
    reviews: Review[];
    products: Product[];
}> {
    try {
        const [categories, collections, prints, reviews, products] = await Promise.all([
            categoryService.getAll(),
            collectionService.getAll(),
            printService.getAll(),
            reviewService.getAll(),
            productService.getAll(),
        ]);

        return {
            categories: categories.slice(0, 2),
            collections: collections.slice(0, 5),
            prints: prints.slice(0, 3),
            reviews: reviews.slice(0, 3),
            products: products.slice(0, 4),
        };
    } catch (error) {
        console.error("Erro ao carregar home data:", error);
        return { 
            categories: [], 
            collections: [],
            prints: [],
            reviews: [],
            products: [],
        };
    }
}
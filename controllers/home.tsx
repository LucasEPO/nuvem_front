import { Category } from "@/models/category.interface";
import { Collection } from "@/models/collection.interface";
import { Print } from "@/models/Print.interface";
import { Review } from "@/models/review.interface";
import { categoryService } from "@/services/categoryService";
import { collectionService } from "@/services/collectionService";
import { printService } from "@/services/printService";
import { reviewService } from "@/services/reviewService";

export async function loadHomeData(): Promise<{
    categories: Category[];
    collections: Collection[];
    prints: Print[];
    reviews: Review[];
}> {
    try {
        const [categories, collections, prints, reviews] = await Promise.all([
            categoryService.getAll(),
            collectionService.getAll(),
            printService.getAll(),
            reviewService.getAll(),
        ]);

        return {
            categories: categories.slice(0, 2),
            collections: collections.slice(0, 5),
            prints: prints.slice(0, 3),
            reviews: reviews.slice(0, 3),
        };
    } catch (error) {
        console.error("Erro ao carregar home data:", error);
        return { 
            categories: [], 
            collections: [],
            prints: [],
            reviews: [],
        };
    }
}
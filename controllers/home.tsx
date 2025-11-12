import { Category } from "@/models/category.interface";
import { Collection } from "@/models/collection.interface";
import { categoryService } from "@/services/categoryService";
import { collectionService } from "@/services/collectionService";

export async function loadHomeData(): Promise<{
    categories: Category[];
    collections: Collection[];
}> {
    try {
        const [categories, collections] = await Promise.all([
            categoryService.getAll(),
            collectionService.getAll(),
        ]);

        return {
            categories: categories.slice(0, 2),
            collections: collections.slice(0, 5),
        };
    } catch (error) {
        console.error("Erro ao carregar home data:", error);
        return { 
            categories: [], 
            collections: [] 
        };
    }
}
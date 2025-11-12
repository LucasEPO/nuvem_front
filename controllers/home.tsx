import { Category } from "@/models/category.interface";
import { categoryService } from "@/services/categoryService";

export async function loadHomeData(): Promise<{
  categories: Category[];
}> {
    try {
        const categories = await categoryService.getAll();
        const homeCategories = categories.slice(0, 2);
        return { 
            categories: homeCategories 
        };
    } catch (error) {
        console.error("Erro ao carregar home data:", error);
        return { 
            categories: [] 
        };
    }
}
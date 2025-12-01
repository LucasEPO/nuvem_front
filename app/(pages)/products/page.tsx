import { categoryService } from "@/services/categoryService";
import { collectionService } from "@/services/collectionService";
import { productService } from "@/services/productService";
import ProductsClientPage from "./_components/ProductsClient";
import { Suspense } from "react";

export default async function Page() {
  const [categories, collections, products] = await Promise.all([
    categoryService.getAll(),
    collectionService.getAll(),
    productService.getAll(),
  ]);

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductsClientPage
        categories={categories}
        collections={collections}
        products={products}
      />
    </Suspense>
  );
}
"use client"

import { useState, useMemo, useEffect } from "react";
import SideFilter from "@/components/ui/SideFilter";
import ProductsGrid from "@/components/ui/ProductsGrid";
import { Category } from "@/models/category.interface";
import { Collection } from "@/models/collection.interface";
import { Product } from "@/models/product.interface";
import { useRouter, useSearchParams } from "next/navigation";
import ProductModal from "@/components/ui/ProductModal";
import { productService } from "@/services/productService";

interface Props {
  categories: Category[];
  collections: Collection[];
  products: Product[];
}

export default function ProductsClientPage({ categories, collections, products }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const categoryParam = params.get("category");
  const collectionParam = params.get("collection");

  const [openModal, setOpenModal] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );

  const [selectedCollections, setSelectedCollections] = useState<string[]>(
    collectionParam ? [collectionParam] : []
  );

  const filteredProducts = useMemo(() => {
    return products.filter(prod => {
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(String(prod.category.category_id));

      const matchCollection =
        selectedCollections.length === 0 ||
        selectedCollections.includes(String(prod.collection.collection_id));

      return matchCategory && matchCollection;
    });
  }, [products, selectedCategories, selectedCollections]);

  async function handleCreateProduct(formData: any) {
    try {
      const res = await productService.create(formData);

      setOpenModal(false);

      if(res.ok)
        router.refresh();
    } catch (err) {
      console.error("Erro ao criar produto:", err);
    }
  }

  return (
    <main className="flex min-h-screen">

      <ProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        categories={categories}
        collections={collections}
        onSubmit={handleCreateProduct}
      />

      <SideFilter
        categories={categories}
        collections={collections}
        onCategoryChange={setSelectedCategories}
        onCollectionChange={setSelectedCollections}
        initialSelectedCategories={selectedCategories}
        initialSelectedCollections={selectedCollections}
      />

      <ProductsGrid 
        products={filteredProducts} 
        onAddProduct={() => setOpenModal(true)}
      />
    </main>
  );
}
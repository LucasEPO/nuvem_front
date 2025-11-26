"use client"

import { useState, useMemo } from "react";
import SideFilter from "@/components/ui/SideFilter";
import ProductsGrid from "@/components/ui/ProductsGrid";
import { Category } from "@/models/category.interface";
import { Collection } from "@/models/collection.interface";
import { Product } from "@/models/product.interface";

interface Props {
  categories: Category[];
  collections: Collection[];
  products: Product[];
}

export default function ProductsClientPage({ categories, collections, products }: Props) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);

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

  return (
    <main className="flex min-h-screen">

      <SideFilter
        categories={categories}
        collections={collections}
        onCategoryChange={setSelectedCategories}
        onCollectionChange={setSelectedCollections}
      />

      <ProductsGrid products={filteredProducts} />
    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Divider } from "@mui/material";

import { Category } from "@/models/category.interface";
import { Collection } from "@/models/collection.interface";

interface Props {
    categories: Category[];
    collections: Collection[];
    onCategoryChange?: (ids: string[]) => void;
    onCollectionChange?: (ids: string[]) => void;
}

export default function SideFilter({
    categories,
    collections,
    onCategoryChange,
    onCollectionChange,
}: Props) {

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedCollections, setSelectedCollections] = useState<string[]>([]);

    useEffect(() => {
        onCategoryChange?.(selectedCategories);
    }, [selectedCategories]);

    useEffect(() => {
        onCollectionChange?.(selectedCollections);
    }, [selectedCollections]);

    function toggleCategory(id: string) {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    }

    function toggleCollection(id: string) {
        setSelectedCollections(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    }

    return (
        <aside className="w-64 p-6 border-r border-gray-200 bg-white text-gray-800">
            <h2 className="text-xl font-bold mb-4">Filtros</h2>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Categorias</h3>
                <div className="flex flex-col ml-2">
                    {categories.map(cat => (
                        <FormControlLabel
                            key={cat.category_id}
                            control={
                                <Checkbox
                                    checked={selectedCategories.includes(String(cat.category_id))}
                                    onChange={() => toggleCategory(String(cat.category_id))}
                                    size="small"
                                />
                            }
                            label={cat.name}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Coleções</h3>
                <div className="flex flex-col ml-2">
                    {collections.map(col => (
                        <FormControlLabel
                            key={col.collection_id}
                            control={
                                <Checkbox
                                    checked={selectedCollections.includes(String(col.collection_id))}
                                    onChange={() => toggleCollection(String(col.collection_id))}
                                    size="small"
                                />
                            }
                            label={col.name}
                        />
                    ))}
                </div>
            </div>
        </aside>
    );
}

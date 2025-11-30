"use client";

import { useRef, useState } from "react";
import { Category } from "@/models/category.interface";
import { Collection } from "@/models/collection.interface";
import { FaX } from "react-icons/fa6";
import { CldUploadButton } from "next-cloudinary";
import { Divider } from "@mui/material";

interface Props {
    open: boolean;
    onClose: () => void;
    categories: Category[];
    collections: Collection[];
    onSubmit: (data: any) => void;
}

export default function ProductModal({
    open,
    onClose,
    categories,
    collections,
    onSubmit,
}: Props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const tempPublicIdRef = useRef<string | null>(null);

    const [categorySearch, setCategorySearch] = useState("");
    const [collectionSearch, setCollectionSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

    if (!open) return null;

    const filteredCategories = categories.filter(c =>
        c.name.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filteredCollections = collections.filter(c =>
        c.name.toLowerCase().includes(collectionSearch.toLowerCase())
    );

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const payload = {
            name,
            price: Number(price),
            description,
            category_id: selectedCategory?.category_id,
            collection_id: selectedCollection?.collection_id,
            image_url: imageUrl,
        };

        console.log("hs>", payload);

        onSubmit(payload); 
    }

    async function handleCancel() {
        if (tempPublicIdRef.current) {
            await fetch("/api/delete-cloudinary-image", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-store",
                body: JSON.stringify({ public_id: tempPublicIdRef.current }),
            });
        }

        tempPublicIdRef.current = null;
        setImageUrl(null);
        setName("");
        setPrice("");
        setCategorySearch("");
        setCollectionSearch("");
        setDescription("");
        onClose();
    }
    
    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleCancel}
        >
            <div
                className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl text-gray-800 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Criar Produto</h2>
                    <button
                        onClick={handleCancel}
                        className="text-gray-600 hover:text-red-500 text-xl"
                    >
                        <FaX className="h-5 w-5 cursor-pointer"/>
                    </button>
                </div>
                <Divider className="bg-black"/>
                <div className="flex flex-col gap-4">
                    <div className="mt-4">
                        <input
                            className="w-full border rounded-lg p-2 mt-1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome do produto"
                        />
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2">
                        <div className="w-[40%]">
                            {!imageUrl && 
                                <CldUploadButton
                                    uploadPreset="next-cloudinary-signed"
                                    signatureEndpoint="/api/sign-cloudinary-params"
                                    onSuccess={(result) => {
                                            const info = result.info as unknown as import("next-cloudinary").CloudinaryUploadWidgetInfo;
                                            const url = info.secure_url;

                                            tempPublicIdRef.current = info.public_id;
                                            setImageUrl(url);
                                        }}
                                    className="bg-gray-100 border rounded-lg p-2 text-center cursor-pointer hover:bg-gray-200"
                                >
                                    Upload Imagem
                                </CldUploadButton>
                            }

                            {imageUrl && (
                                <img src={imageUrl} className="w-32 mt-2 rounded-lg border" />
                            )}
                        </div>
                        <div className="flex flex-row items-center w-[60%] gap-2">
                            <label>Preço: </label>
                            <input
                                type="number"
                                className="w-full border rounded-lg p-2"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Preço"
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            className="w-full border rounded-lg p-2 mt-1"
                            placeholder="Buscar categoria..."
                            value={selectedCategory?.name || categorySearch}
                            onChange={(e) => {
                                setSelectedCategory(null);
                                setCategorySearch(e.target.value);
                            }}
                        />

                        {categorySearch && !selectedCategory && (
                            <div className="border rounded-lg mt-1 max-h-40 overflow-y-auto bg-white">
                                {filteredCategories.map(cat => (
                                    <div
                                        key={cat.category_id}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setCategorySearch("");
                                        }}
                                    >
                                        {cat.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            className="w-full border rounded-lg p-2 mt-1"
                            placeholder="Buscar coleção..."
                            value={selectedCollection?.name || collectionSearch}
                            onChange={(e) => {
                                setSelectedCollection(null);
                                setCollectionSearch(e.target.value);
                            }}
                        />

                        {collectionSearch && !selectedCollection && (
                            <div className="border rounded-lg mt-1 max-h-40 overflow-y-auto bg-white">
                                {filteredCollections.map(col => (
                                    <div
                                        key={col.collection_id}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSelectedCollection(col);
                                            setCollectionSearch("");
                                        }}
                                    >
                                        {col.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <textarea
                            className="w-full border rounded-lg p-2 mt-1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição"
                        ></textarea>
                    </div>

                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-medium"
                        onClick={handleSubmit}
                    >
                        Salvar Produto
                    </button>
                </div>
            </div>
        </div>
    );
}

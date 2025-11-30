import { Product } from "@/models/product.interface";

const API_URL = process.env.API_URL; 

export const productService = {
  async getAll(): Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) 
      throw new Error("Erro ao buscar produtos");

    return response.json();
  },

  async create(data: {
    name: string;
    price: number;
    description: string;
    category_id: number;
    collection_id: number;
    image_url: string;
  }) {

    const payload = {
      name: data.name,
      price: data.price,
      description: data.description,
      image_url: data.image_url,
      fk_product_category: data.category_id,
      fk_product_collection: data.collection_id,
      quantity: 1,
    };

    console.log(payload);

    const apiRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!apiRes.ok) 
      throw new Error("Erro ao criar produto");
    

    return await apiRes.json();
  },

  
}
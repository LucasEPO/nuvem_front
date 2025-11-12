interface ProductCollection {
    collection_id: number;
    name: string;
}

interface ProductCategory {
    category_id: number;
    name: string;
}

export interface Product {
    product_id: string;
    name: string;
    description?: string;
    price: number;
    quantity: number;
    image_url?: string;
    size?: string;
    collection: ProductCollection;
    category: ProductCategory;
}
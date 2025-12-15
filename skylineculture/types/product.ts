export interface VariantOption {
  [key: string]: string[]; 
}

export interface Product {
    id: number;
    title: string;
    price: number;
    sale_price: number | null;
    img: string[];
    url: string;
    description: string[];
    specs: string;
    shipping: string[];
    variants: VariantOption[];
    collection: string;
    stars: number;
    featured: boolean;
}
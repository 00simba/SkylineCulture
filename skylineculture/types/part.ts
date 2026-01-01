export interface VariantOption {
  [key: string]: string[]; 
}

export interface Part {
    id: number;
    title: string;
    price: number;
    sale_price: number | null;
    img: string[];
    url: string[];
    description: string[];
    specs: string;
    shipping: string[];
    variants: VariantOption[];
    compatible: string[];
    stars: number;
    featured: boolean;
    catalogue: string;
    partNumber: string[];
}
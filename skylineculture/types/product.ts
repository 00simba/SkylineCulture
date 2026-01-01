export type ProductOptionValue = {
  label: string;
  slug: string;
};

export type ProductOption = {
  name: string;
  values: ProductOptionValue[];
};

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
    options?: ProductOption;
    category : string,
    collection: string;
    featured: boolean;
    weightLb: number;
}
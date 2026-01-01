export type PartOptionValue = {
  label: string;
  slug: string;
};

export type PartOption = {
  name: string;
  values: PartOptionValue[];
};


export interface Part {
    id: number;
    brand: string;
    title: string;
    price: number;
    sale_price: number | null;
    img: string[];
    url: string;
    description: string[];
    specs: string;
    shipping: string[];
    category: string;
    options?: PartOption,
    compatible: string[];
    featured: boolean;
    catalogue: string;
    partNumber: string[];
    weightLb: number;
}
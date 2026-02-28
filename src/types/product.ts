export interface Product {
    id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    availabilityStatus: string;
    thumbnail: string;
    tags: string[];
}

export interface ProductCardProps {
    product: Product;
    onClick?: () => void;
}
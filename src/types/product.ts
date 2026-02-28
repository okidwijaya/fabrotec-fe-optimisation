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

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export interface ProductMeta {
  barcode: string;
  qrCode: string;
}

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductDetail {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  availabilityStatus: string;

  sku: string;
  weight: number;
  minimumOrderQuantity: number;

  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;

  tags: string[];

  dimensions: ProductDimensions;
  meta: ProductMeta;
  reviews: Review[];

  thumbnail: string;
  images: string[];
}
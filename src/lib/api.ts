// import axios from "axios";
const BASE_URL = "https://dummyjson.com/products";

export async function getProducts() {
    const res = await fetch(BASE_URL, {
        next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export async function getProduct(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}
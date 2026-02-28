"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";
// import Image from "next/image";

export default function Home() {
  const [productsCard, setProductsCard] = useState<Product[]>([]);
  getProducts()
    .then((res) => {
      console.log("Products:", res);
      setProductsCard(res.products);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <h1>fabrotec-fe-optimisation</h1>
        {productsCard.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          productsCard.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </main>
    </div>
  );
}

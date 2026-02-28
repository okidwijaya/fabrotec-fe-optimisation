"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts();
      setProducts(res.products);
      setFilteredProducts(res.products);
    }

    fetchData();
  }, []);

  useEffect(() => {
    let updated = [...products];
    if (category) {
      updated = updated.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      updated = updated.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "asc") {
      updated.sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [search, category, sort, products]);

  return (
    <div className="flex min-h-screen items-start justify-center bg-white font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col py-8 px-4 bg-white">

        <h1 className="w-full bg-[#121212] text-white p-4 rounded-lg font-semibold uppercase">
          Product List
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <input
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm"
          >
            <option value="">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm"
          >
            <option value="">Sort By</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>

        </div>

        <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

      </main>
    </div>
  );
}
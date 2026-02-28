"use client";

import React, { useState } from "react";

const product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    brand: "Essence",
    category: "beauty",
    description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    dimensions: { width: 15.14, height: 13.08, depth: 22.99 },
    discountPercentage: 10.48,
    images: [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
    meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "5784719087687",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    minimumOrderQuantity: 48,
    price: 9.99,
    rating: 2.56,
    returnPolicy: "No return policy",
    reviews: [
        { rating: 2, comment: "Very unhappy with my purchase!", date: "2025-05-23T08:56:21.618Z", reviewerName: "John Doe", reviewerEmail: "john.doe@x.dummyjson.com" },
        { rating: 2, comment: "Not as described!", date: "2025-05-23T08:56:21.618Z", reviewerName: "Nolan Gonzalez", reviewerEmail: "nolan.gonzalez@x.dummyjson.com" },
        { rating: 5, comment: "Very satisfied!", date: "2025-05-23T08:56:21.618Z", reviewerName: "Scarlett Wright", reviewerEmail: "scarlett.wright@x.dummyjson.com" },
    ],
    shippingInformation: "Ships in 3-5 business days",
    sku: "BEA-ESS-ESS-001",
    stock: 99,
    tags: ["beauty", "mascara"],
    thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    warrantyInformation: "1 week warranty",
    weight: 4,
    availabilityStatus: "In Stock",
};

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
    const sz = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => {
                const fill = Math.min(1, Math.max(0, rating - i));
                return (
                    <div key={i} className={`relative ${sz}`}>
                        <svg viewBox="0 0 20 20" className={`w-full h-full text-[#e8ddd0]`} fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                            <svg viewBox="0 0 20 20" className={`${sz} text-[#c9a96e]`} fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function ProductPage() {
    const [qty, setQty] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);

    const discountedPrice = product.price * (1 - product.discountPercentage / 100);
    const savings = (product.price - discountedPrice) * qty;

    const allImages = [product.thumbnail, ...product.images];

    function handleAddToCart() {
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    }

    return (
        <div
            className="min-h-screen bg-[#faf8f5]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
            {/* Google Fonts import via style tag */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        .mono { font-family: 'DM Mono', monospace; }
      `}</style>

            {/* Header */}
            <header className="border-b border-[#e8e0d5] bg-[#faf8f5] sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div>
                        <span className="text-xl font-bold text-[#2c1f14] tracking-tight">BEAUTÉ</span>
                        <span className="text-[#c9a96e] text-xl">.</span>
                    </div>
                    <nav className="hidden md:flex gap-8 mono text-xs tracking-widest text-[#9b8b6e] uppercase">
                        <a href="#" className="hover:text-[#2c1f14] transition-colors">Shop</a>
                        <a href="#" className="hover:text-[#2c1f14] transition-colors">Collections</a>
                        <a href="#" className="hover:text-[#2c1f14] transition-colors">About</a>
                    </nav>
                    <button className="mono text-xs tracking-widest uppercase text-[#2c1f14] border border-[#2c1f14] px-4 py-2 hover:bg-[#2c1f14] hover:text-[#faf8f5] transition-all duration-200">
                        Cart (0)
                    </button>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="mono text-xs text-[#9b8b6e] tracking-widest uppercase flex items-center gap-2">
                    <a href="#" className="hover:text-[#2c1f14]">Home</a>
                    <span>/</span>
                    <a href="#" className="hover:text-[#2c1f14]">{product.category}</a>
                    <span>/</span>
                    <span className="text-[#2c1f14]">{product.title}</span>
                </div>
            </div>

            {/* Main product section */}
            <main className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Images */}
                    <div className="space-y-4">
                        {/* Main image */}
                        <div
                            className="bg-[#f2ede6] border border-[#e8e0d5] flex items-center justify-center overflow-hidden"
                            style={{ height: "480px" }}
                        >
                            <img
                                src={allImages[activeImg]}
                                alt={product.title}
                                className="h-80 w-auto object-contain transition-all duration-500"
                            />
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-3">
                            {allImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImg(i)}
                                    className={`w-20 h-20 bg-[#f2ede6] border-2 flex items-center justify-center overflow-hidden transition-all duration-200 ${activeImg === i ? "border-[#c9a96e]" : "border-[#e8e0d5] hover:border-[#d4b896]"
                                        }`}
                                >
                                    <img src={img} alt="" className="h-14 w-auto object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="pt-2">
                        {/* Brand & category */}
                        <div className="flex items-center gap-3 mb-3">
                            <span className="mono text-xs tracking-[0.2em] uppercase text-[#c9a96e] font-medium">
                                {product.brand}
                            </span>
                            <span className="w-px h-3 bg-[#d4b896]" />
                            <span className="mono text-xs tracking-widest uppercase text-[#9b8b6e] bg-[#f0e8db] px-2 py-0.5">
                                {product.category}
                            </span>
                            <span className="ml-auto mono text-xs tracking-widest uppercase">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block mr-1.5 animate-pulse" />
                                <span className="text-emerald-700">{product.availabilityStatus}</span>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-[#2c1f14] leading-tight mb-4">
                            {product.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-6">
                            <StarRating rating={product.rating} size="lg" />
                            <span className="text-[#9b8b6e] mono text-sm">{product.rating.toFixed(2)} / 5.00</span>
                            <span className="text-[#b8a88a] mono text-xs">({product.reviews.length} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="bg-[#f2ede6] border border-[#e8e0d5] p-4 mb-6">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="text-4xl font-bold text-[#2c1f14]">
                                    ${discountedPrice.toFixed(2)}
                                </span>
                                <span className="text-lg line-through text-[#b8a88a]">
                                    ${product.price.toFixed(2)}
                                </span>
                                <span className="mono text-sm text-white bg-[#c9a96e] px-2 py-0.5 font-semibold">
                                    -{product.discountPercentage.toFixed(2)}% OFF
                                </span>
                            </div>
                            <p className="mono text-xs text-emerald-700">
                                You save ${savings.toFixed(2)} on this order
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-[#5c4a35] leading-relaxed mb-6 text-[15px]">
                            {product.description}
                        </p>

                        {/* Tags */}
                        <div className="flex gap-2 mb-6">
                            {product.tags.map((tag) => (
                                <span key={tag} className="mono text-[10px] tracking-widest uppercase border border-[#d4b896] text-[#9b8b6e] px-3 py-1">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-4 mb-2">
                            <span className="mono text-xs tracking-widest uppercase text-[#9b8b6e]">Quantity</span>
                            <div className="flex items-center border border-[#d4b896]">
                                <button
                                    onClick={() => setQty(Math.max(1, qty - 1))}
                                    className="w-10 h-10 text-xl text-[#2c1f14] hover:bg-[#f0e8db] transition-colors flex items-center justify-center"
                                >
                                    −
                                </button>
                                <span className="w-12 text-center mono text-sm font-medium text-[#2c1f14]">
                                    {qty}
                                </span>
                                <button
                                    onClick={() => setQty(Math.min(product.stock, qty + 1))}
                                    className="w-10 h-10 text-xl text-[#2c1f14] hover:bg-[#f0e8db] transition-colors flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                            <span className="mono text-xs text-[#b8a88a]">{product.stock} in stock</span>
                        </div>
                        <p className="mono text-[10px] text-[#9b8b6e] mb-6">
                            Min. order quantity: {product.minimumOrderQuantity} units (bulk)
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-3 mb-8">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 py-4 mono text-sm font-medium tracking-[0.15em] uppercase border-2 border-[#2c1f14] bg-[#2c1f14] text-[#faf8f5] hover:bg-[#3d2b1a] transition-all duration-200"
                            >
                                {addedToCart ? "✓ Added!" : "Add to Cart"}
                            </button>
                            <button className="flex-1 py-4 mono text-sm font-medium tracking-[0.15em] uppercase border-2 border-[#2c1f14] text-[#2c1f14] hover:bg-[#f0e8db] transition-all duration-200">
                                Buy Now
                            </button>
                        </div>

                        {/* Info grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {[
                                { label: "SKU", value: product.sku },
                                { label: "Weight", value: `${product.weight}g` },
                                { label: "Shipping", value: product.shippingInformation },
                                { label: "Warranty", value: product.warrantyInformation },
                                { label: "Returns", value: product.returnPolicy },
                                { label: "Dimensions", value: `${product.dimensions.width}×${product.dimensions.height}×${product.dimensions.depth} cm` },
                            ].map(({ label, value }) => (
                                <div key={label} className="border border-[#e8e0d5] p-3 bg-white">
                                    <div className="mono text-[10px] tracking-widest uppercase text-[#9b8b6e] mb-0.5">{label}</div>
                                    <div className="mono text-xs text-[#2c1f14] font-medium">{value}</div>
                                </div>
                            ))}
                        </div>

                        {/* Barcode / QR */}
                        <div className="flex items-center gap-4 border border-[#e8e0d5] p-3 bg-white">
                            <img src={product.meta.qrCode} alt="QR Code" className="w-14 h-14" />
                            <div>
                                <div className="mono text-[10px] tracking-widest uppercase text-[#9b8b6e] mb-0.5">Barcode</div>
                                <div className="mono text-xs text-[#2c1f14]">{product.meta.barcode}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <section className="mt-20">
                    <div className="flex items-center gap-6 mb-8">
                        <h2 className="text-3xl font-bold text-[#2c1f14]">Customer Reviews</h2>
                        <div className="flex-1 h-px bg-[#e8e0d5]" />
                        <div className="flex items-center gap-2">
                            <StarRating rating={product.rating} size="lg" />
                            <span className="mono text-sm text-[#9b8b6e]">{product.rating.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {product.reviews.map((review, i) => (
                            <div key={i} className="bg-white border border-[#e8e0d5] p-5">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <div className="font-semibold text-[#2c1f14] text-sm">{review.reviewerName}</div>
                                        <div className="mono text-[10px] text-[#b8a88a] mt-0.5">
                                            {new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                                        </div>
                                    </div>
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className="text-[#5c4a35] text-sm leading-relaxed italic">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-[#e8e0d5] bg-[#2c1f14] text-[#faf8f5] py-8">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <span className="text-xl font-bold">BEAUTÉ<span className="text-[#c9a96e]">.</span></span>
                    <span className="mono text-xs tracking-widest uppercase text-[#9b8b6e]">
                        © 2025 All rights reserved
                    </span>
                </div>
            </footer>
        </div>
    );
}
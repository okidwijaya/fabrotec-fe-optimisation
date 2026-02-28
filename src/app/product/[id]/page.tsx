"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getProduct } from "@/src/lib/api";
import { ProductDetail } from "@/src/types/product";

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
    const sz = size === "md" ? "w-4 h-4" : "w-3.5 h-3.5";
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} viewBox="0 0 20 20" className={sz} fill={s <= Math.round(rating) ? "#f59e0b" : "#e5e7eb"}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function ProductPage() {
    const { id } = useParams();

    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [loading, setLoading] = useState(true);

    const [qty, setQty] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    const [added, setAdded] = useState(false);
    const [wishlist, setWishlist] = useState(false);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProduct(id as string);
                setProduct(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    const allImages = [product.thumbnail, ...(product.images || [])];
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    function handleAdd() {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    }

    return (
        <div className="min-h-screen bg-[#f9f9f9]">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center gap-2 text-xs text-[#aaa]">
                    <span>Home</span>
                    <span>/</span>
                    <span>{product.category}</span>
                    <span>/</span>
                    <span className="text-[#444]">{product.title}</span>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

                    {/* Carousel */}
                    <div className="space-y-3">
                        <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: "460px" }}>
                            <img
                                src={allImages[activeImg]}
                                alt={product.title}
                                className="h-72 w-auto object-contain transition-all duration-500"
                            />
                        </div>

                        <div className="flex gap-2">
                            {allImages.map((img: string, i: number) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImg(i)}
                                    className={`w-16 h-16 rounded-xl bg-white flex items-center justify-center overflow-hidden border-2 transition-all duration-200 ${activeImg === i
                                            ? "border-[#6366f1]"
                                            : "border-transparent hover:border-[#ddd]"
                                        }`}
                                >
                                    <img src={img} alt="" className="h-10 w-auto object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">                        <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold bg-[#f0f0ff] text-[#6366f1] px-2.5 py-1 rounded-full">
                            {product.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                            {product.availabilityStatus}
                        </span>
                    </div>
                        <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-2">{product.brand}</p>
                        <h1 className="text-3xl font-bold text-[#111] leading-tight mb-4">
                            {product.title}
                        </h1>
                        <div className="flex items-center gap-2 mb-5">
                            <Stars rating={product.rating} size="md" />
                            <span className="text-sm text-[#666]">{product.rating.toFixed(1)}</span>
                            <span className="text-sm text-[#bbb]">({product.reviews.length} reviews)</span>
                        </div>
                        <p className="text-sm text-[#666] leading-relaxed mb-6">
                            {product.description}
                        </p>
                        <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-4xl font-extrabold text-[#111]">${discountedPrice.toFixed(2)}</span>
                            <span className="text-lg text-[#bbb] line-through">${product.price.toFixed(2)}</span>
                            <span className="text-sm font-semibold bg-[#fff0f0] text-[#ef4444] px-2 py-0.5 rounded-full">
                                -{product.discountPercentage.toFixed(0)}% OFF
                            </span>
                        </div>
                        <div className="border-t border-[#f0f0f0] mb-6" />
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-sm font-medium text-[#444]">Qty</span>
                            <div className="flex items-center bg-[#f5f5f5] rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setQty(Math.max(1, qty - 1))}
                                    className="w-10 h-10 text-lg text-[#444] hover:bg-[#eee] transition-colors flex items-center justify-center"
                                >−</button>
                                <span className="w-10 text-center text-sm font-semibold text-[#111]">{qty}</span>
                                <button
                                    onClick={() => setQty(Math.min(product.stock, qty + 1))}
                                    className="w-10 h-10 text-lg text-[#444] hover:bg-[#eee] transition-colors flex items-center justify-center"
                                >+</button>
                            </div>
                            <span className="text-xs text-[#bbb]">{product.stock} in stock</span>
                        </div>
                        <div className="flex gap-3 mb-5">
                            <button
                                onClick={handleAdd}
                                className="flex-1 py-3.5 rounded-xl text-sm font-semibold bg-[#111] text-white transition-all duration-200 hover:bg-[#333]"
                            >
                                {added ? "✓ Added to Cart" : "Add to Cart"}
                            </button>
                            <button
                                onClick={() => setWishlist(!wishlist)}
                                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-200 ${wishlist ? "border-[#ef4444] bg-[#fff0f0]" : "border-[#eee] hover:border-[#ddd]"
                                    }`}
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill={wishlist ? "#ef4444" : "none"} stroke={wishlist ? "#ef4444" : "#aaa"} strokeWidth="1.8">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { icon: "Information:", text: product.shippingInformation },
                                { icon: "Warranty:", text: product.warrantyInformation },
                                { icon: "Return Policy:", text: product.returnPolicy },
                            ].map(({ icon, text }) => (
                                <span key={text} className="flex items-center gap-1.5 text-xs text-[#666] bg-[#f5f5f5] px-3 py-1.5 rounded-full">
                                    <span>{icon}</span>{text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">                    <div className="bg-white rounded-2xl p-6">
                    <h2 className="text-base font-bold text-[#111] mb-4">Product Details</h2>
                    <div className="space-y-3">
                        {[
                            ["SKU", product.sku],
                            ["Weight", `${product.weight}g`],
                            ["Dimensions", `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`],
                            ["Min. Order Qty", `${product.minimumOrderQuantity} units`],
                            ["Barcode", product.meta.barcode],
                            ["Tags", product.tags.map(t => `#${t}`).join("  ")],
                        ].map(([label, value]) => (
                            <div key={label} className="flex justify-between items-start text-sm">
                                <span className="text-[#aaa] font-medium">{label}</span>
                                <span className="text-[#333] font-medium text-right max-w-[60%]">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                        <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest">Scan to view</p>
                        <img src={product.meta.qrCode} alt="QR Code" className="w-28 h-28" />
                        <p className="text-xs text-[#bbb]">Product ID: #{product.id}</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-[#111]">Customer Reviews</h2>
                        <div className="flex items-center gap-2">
                            <Stars rating={product.rating} size="md" />
                            <span className="text-sm text-[#666] font-medium">{product.rating.toFixed(1)} / 5</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {product.reviews.map((review, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#f0f0ff] flex items-center justify-center text-xs font-bold text-[#6366f1]">
                                            {review.reviewerName.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#111]">{review.reviewerName}</p>
                                            <p className="text-[10px] text-[#bbb]">
                                                {new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                            </p>
                                        </div>
                                    </div>
                                    <Stars rating={review.rating} />
                                </div>
                                <p className="text-sm text-[#666] leading-relaxed">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <footer className="border-t border-[#efefef] bg-white">
                <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
                    <span className="font-bold text-[#111]">shop<span className="text-[#6366f1]">.</span></span>
                    <span className="text-xs text-[#bbb]">© 2025 All rights reserved</span>
                </div>
            </footer>
        </div>
    );
}
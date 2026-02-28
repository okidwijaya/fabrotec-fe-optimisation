"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductCardProps } from "../types/product";

export default function ProductCard({ product }: ProductCardProps) {
    const [wishlist, setWishlist] = useState(false);
    const router = useRouter();

    const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    return (
        <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >

            <div className="relative bg-[#f7f7f8] overflow-hidden" style={{ height: "220px" }}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 left-3 bg-[#111] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    -{Math.round(product.discountPercentage)}%
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setWishlist(!wishlist);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-110"
                >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill={wishlist ? "#ef4444" : "none"} stroke={wishlist ? "#ef4444" : "#999"} strokeWidth="1.8">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
            </div>

            <div className="p-4">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-widest mb-1">
                    {product.brand}
                </p>

                <h3 className="text-[15px] font-semibold text-[#111] leading-snug mb-2 line-clamp-2">
                    {product.title}
                </h3>

                <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <svg key={s} viewBox="0 0 20 20" className="w-3 h-3" fill={s <= Math.round(product.rating) ? "#f59e0b" : "#e5e7eb"}>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-[11px] text-[#999]">{product.rating.toFixed(1)}</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-[#111]">${discountedPrice.toFixed(2)}</span>
                        <span className="text-[12px] text-[#bbb] line-through">${product.price.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#333] hover:scale-105"
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>

                <div className="mt-3 pt-3 border-t border-[#f2f2f2] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        <span className="text-[11px] text-[#888]">{product.availabilityStatus}</span>
                    </div>
                    <span className="text-[11px] text-[#bbb]">{product.stock} left</span>
                </div>
            </div>
        </div>
    );
}
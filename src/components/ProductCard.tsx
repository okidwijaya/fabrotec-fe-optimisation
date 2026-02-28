"use client";

import React, { useState } from "react";
import { ProductCardProps } from "../types/product";

export default function ProductCard({ product, onClick }: ProductCardProps) {
    const [hovered, setHovered] = useState(false);
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    const stars = Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(1, Math.max(0, product.rating - i));
        return fill;
    });

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative cursor-pointer"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
            {/* Card */}
            <div
                className="relative bg-[#faf8f5] border border-[#e8e0d5] overflow-hidden transition-all duration-500"
                style={{
                    boxShadow: hovered
                        ? "8px 8px 0px #c9a96e"
                        : "4px 4px 0px #d4b896",
                    transform: hovered ? "translate(-2px, -2px)" : "translate(0,0)",
                }}
            >
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 z-10 bg-[#c9a96e] text-white text-xs font-bold px-2 py-1 tracking-widest uppercase"
                    style={{ fontFamily: "monospace" }}>
                    -{Math.round(product.discountPercentage)}%
                </div>

                {/* Stock Badge */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span className="text-[10px] text-emerald-700 font-semibold tracking-wider uppercase"
                        style={{ fontFamily: "monospace" }}>
                        {product.availabilityStatus}
                    </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden bg-[#f2ede6] h-56 flex items-center justify-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-44 w-auto object-contain transition-transform duration-700"
                        style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
                    />
                    {/* Decorative diagonal line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#d4b896]" />
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Category & Brand */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#9b8b6e]"
                            style={{ fontFamily: "monospace" }}>
                            {product.brand}
                        </span>
                        <span className="text-[10px] tracking-widest uppercase text-[#b8a88a] bg-[#f0e8db] px-2 py-0.5"
                            style={{ fontFamily: "monospace" }}>
                            {product.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[#2c1f14] text-lg font-bold leading-tight mb-1">
                        {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex gap-0.5">
                            {stars.map((fill, i) => (
                                <div key={i} className="relative w-3.5 h-3.5">
                                    {/* Empty star */}
                                    <svg viewBox="0 0 20 20" className="w-full h-full text-[#d4b896]" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    {/* Filled overlay */}
                                    <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                                        <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-[#c9a96e]" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span className="text-xs text-[#9b8b6e]">{product.rating.toFixed(1)}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl font-bold text-[#2c1f14]">
                            ${discountedPrice.toFixed(2)}
                        </span>
                        <span className="text-sm line-through text-[#b8a88a]">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.tags.map((tag) => (
                            <span key={tag} className="text-[10px] tracking-widest uppercase border border-[#d4b896] text-[#9b8b6e] px-2 py-0.5"
                                style={{ fontFamily: "monospace" }}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <button
                        className="w-full py-2.5 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 border-2 border-[#2c1f14]"
                        style={{
                            fontFamily: "monospace",
                            background: hovered ? "#2c1f14" : "transparent",
                            color: hovered ? "#faf8f5" : "#2c1f14",
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
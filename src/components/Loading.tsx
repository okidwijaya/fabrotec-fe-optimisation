'use client';
import React from 'react'
import Image from 'next/image'
import logo from "../../public/final-logo.svg";

export default function LoadingLogoDefault() {
    return (
        <div className='w-full min-h-screen max-w-[600px] [perspective:1000px] mx-auto flex items-center justify-center'>
            <div className="w-32 h-32 mx-auto animate-flip" style={{ transformStyle: "preserve-3d" }}>
                <Image
                    src={logo}
                    alt="Loading..."
                    className="w-full h-full object-contain block"
                />
            </div>

            <style jsx>{`
            @keyframes flip {
            0%, 100% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
            }

            .animate-flip {
            animation: flip 2s linear infinite;
            transform-style: preserve-3d;
            }
        `}</style>
        </div>
    )
}
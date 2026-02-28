import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <header className="bg-white border-b border-[#efefef] sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-lg font-bold text-[#111] tracking-tight">shop<span className="text-[#6366f1]">.</span></Link>
                    <nav className="hidden md:flex gap-8 text-sm text-[#666] font-medium">
                        <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
                        <Link href="/products" className="hover:text-[#111] transition-colors">Shop</Link>
                        <Link href="/about" className="hover:text-[#111] transition-colors">About</Link>
                    </nav>
                    <button className="relative p-2">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#111]" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-[#6366f1] rounded-full" />
                    </button>
                </div>
            </header>
        </>
    )
}

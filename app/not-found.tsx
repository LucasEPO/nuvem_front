"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            
            <h1 className="text-5xl font-bold text-blue-700 mb-4">
                404
            </h1>

            <p className="text-blue-600 text-lg mb-8 text-center">
                Ops! A página que você está tentando acessar não existe.
            </p>

            <Link
                href="/"
                className="px-6 py-3 bg-primary text-black underline rounded-lg font-medium hover:opacity-90 transition"
            >
                Voltar para Home
            </Link>
        </div>
    );
}

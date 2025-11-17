'use client'

import { reviewService } from "@/services/reviewService";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function ReviewForm() {
    const [rating, setRating] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [hover, setHover] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await reviewService.create({rating, description})
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-md w-[70%] max-md:p-6 overflow-hidden wrap-anywhere">
            <h3 className="text-xl text-[#1a2a4a] mb-6 text-center">Deixe sua avaliação</h3>
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
            >
                <div className="flex flex-col gap-2 text-[#1a2a4a]">
                    <label htmlFor="rating-stars" className="font-medium">Sua avaliação</label>
                    <div className="flex flex-row flex-wrap justify-start gap-2">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <button
                                    key={ratingValue}
                                    type="button"
                                    onClick={() => setRating(ratingValue)}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                    className="transition-colors duration-200"
                                >
                                <FaStar
                                    className={`text-2xl cursor-pointer ${
                                    ratingValue <= (hover ?? rating ?? 0)
                                        ? "text-yellow-400"
                                        : "text-slate-300"
                                    }`}
                                />
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-[#1a2a4a]">
                    <label
                        htmlFor="user-review"
                        className="font-medium text-[#1a2a4a]"
                    >
                        Seu comentário
                    </label>
                    <textarea
                        id="user-review"
                        placeholder="Conte sua experiência..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-3 border border-[#e2e8f0] rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_0_3px_rgba(77,171,247,0.2)] min-h-[120px] resize-y"
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-linear-to-r from-blue-500 to-sky-400 text-white border-none p-3 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 mt-4 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)]"
                >
                    Enviar Avaliação
                </button>
            </form>
        </div>
    );
};

'use client'
import { useState } from "react";
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa6";

interface productCardButtonsProps {
    label: string,
    variant: "primary" | "secondary",
    icon?: IconType,
    onClick?: () => void
}

export default function ProductCardButtons({ label, variant, icon: Icon, onClick}: productCardButtonsProps) {
    const [added, setAdded] = useState(false);

    if(variant === "primary") {
        return(
            <button
                onClick= {onClick}
                className="w-full p-3 font-bold text-[15px]  text-white rounded-lg cursor-pointer relative overflow-hidden z-1 transition-all duration-300 bg-[linear-gradient(135deg,#ff5e62,#ff9966)] hover:-translate-y-[3px] hover:shadow-[0_7px_20px_rgba(255,94,98,0.4)] active:scale-95 animate-[float_2s_infinite_ease-in-out] max-md:p-2.5 max-md:text-sm"
            >
                {label}
            </button>
        );
    } 
    
    if (variant === "secondary") {
        const handleClick = () => {
            onClick?.();
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        };

        return (
            <button
                onClick={handleClick}
                className={`w-full p-3 font-semibold text-sm rounded-lg cursor-pointer relative overflow-hidden flex items-center justify-center transition-all duration-500 border-2 border-solid max-md:p-2.5 max-md:text-[12px] 
                ${
                    added
                    ? "bg-[#e8f5e9] border-[#28a745] text-[#28a745]"
                    : "bg-transparent border-[#007bff] text-[#007bff] hover:bg-[#f0f7ff]"
                }
                active:scale-95
                `}
            >
                <span
                    className={`inline-block mr-2 max-md:mr-0.5 transition-all duration-500 
                        ${added ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"}`}
                >
                    {Icon && <Icon className="w-4 h-4 max-md:w-3 max-md:h-3" />}
                </span>

                <span
                    className={`transition-all duration-500 
                        ${added ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"}`}
                >
                    {label}
                </span>

                <span
                    className={`flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 transition-all duration-500 text-[#28a745] font-bold whitespace-nowrap 
                    ${
                        added
                        ? "opacity-100 -translate-y-1/2"
                        : "opacity-0 translate-y-5 pointer-events-none"
                    }`}
                >
                    <FaCheck className="w-4 h-4"/> Adicionado!
                </span>
            </button>
        );
    }

    return null;
};

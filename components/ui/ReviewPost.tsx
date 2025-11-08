import { FaCheck, FaStar } from "react-icons/fa6";

interface ReviewPostProps {
    review?: any;
}

export default function ReviewPost({review}: ReviewPostProps) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md mb-10 w-[60%] max-md:p-6 overflow-hidden wrap-anywhere">
            <div className="flex flex-wrap gap-y-2 justify-between items-center mb-4">
                <div className="flex text-[#ffc107] text-2xl tracking-[2px] max-md:text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="bg-[#e3f2fd] text-[#1976d2] px-3.5 py-1.5 rounded-4xl text-sm flex items-center gap-2">
                    <FaCheck className="w-3.5 h-3.5"/>
                    Verificado
                </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-[#333] italic mb-4 relative pl-6 before:content-['\0022'] before:text-[3rem] before:text-[#4dabf7] before:opacity-20 before:absolute before:-left-2 before:-top-4">
                "texto teste da review"
            </blockquote>
            <div className="font-semibold text-[#1a2a4a]">
                review teste autor
            </div>
        </div>
    );
};

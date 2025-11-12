import Image from "next/image";
import imagePlaceholder from '@/public/assets/image_placeeholder.svg';
import { FaArrowRight } from "react-icons/fa6";

interface categoryBannerProps {
    category?: any;
}

export default function CategoryBanner({ category }: categoryBannerProps) {
    return (
        <div className="group relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:border-[rgba(59,130,246,0.5)]">
            <div className="absolute bottom-0 left-0 right-0 flex flex-col p-8 z-10 text-white bg-[linear-gradient(to_top,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0)_100%)]">
                <h3 className="uppercase self-start text-2xl mb-3 font-bold text-[#f8fafc] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
                    {category.name ?? "categoria"}
                </h3>
                <div className="flex items-center gap-2 opacity-0 translate-y-5 transition-all duration-500 ease-in-out text-white font-semibold text-[1.1rem] group-hover:opacity-100 group-hover:translate-y-0">
                    <span>Ver Categoria</span>
                    <FaArrowRight className="w-4 h-4"/>
                </div>
            </div>
            <Image
                src={category.image_url ?? imagePlaceholder}
                alt="Plano de fundo da categoria"
                loading="eager"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover z-1 transition-transform duration-500 ease-in-out"
            />
        </div>
    );
};

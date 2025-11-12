import Image from "next/image";
import imagePlaceholder from '@/public/assets/image_placeeholder.svg';
import { Collection } from "@/models/collection.interface";

interface highlightProps {
    collection?: Collection
}

export default function Highlight({ collection }: highlightProps) {
    return (
        <div className="flex flex-col items-center justify-between min-w-[130px] min-h-[200px]">
            <Image
                src={collection?.image_url ?? imagePlaceholder}
                alt={`Ilustracao ${collection?.name ?? "da colecao"}`}
                loading="lazy"
                placeholder="blur"
                blurDataURL="assets/image_placeholder.svg"
                width={130}
                height={130}
                className="w-[130px] h-[130px] object-cover rounded-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"  
            />
            <Image 
                src={collection?.logo_url ?? imagePlaceholder}
                alt={`Logo ${collection?.name ?? "da colecao"}`}
                loading="lazy"
                placeholder="blur"
                blurDataURL="assets/image_placeholder.svg"
                width={100}
                height={50}
                className="w-[100px] h-[50px] object-fit"
            />
        </div>
    );
};

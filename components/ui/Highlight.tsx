import Image from "next/image";
import imagePlaceholder from '@/public/assets/image_placeeholder.svg';

interface highlightProps {
    collection?: string
}

export default function Highlight({ collection }: highlightProps) {
    return (
        <div className="flex flex-col items-center justify-between min-w-[130px] min-h-[200px]">
            <Image
                src={imagePlaceholder}
                alt="Ilustração da coleção em destaque"
                className="w-[130px] h-[130px] object-cover rounded-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"  
            />
            <Image 
                src={imagePlaceholder}
                alt="Logo da coleção em destaque"
                className="w-[100px] h-[50px] object-cover"
            />
        </div>
    );
};

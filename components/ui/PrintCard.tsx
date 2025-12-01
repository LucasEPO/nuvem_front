'use client'

import { ChangeEvent, useRef, useState } from "react";
import imagePlaceholder from '@/public/assets/image_placeeholder.svg';
import Image from "next/image";
import { FaCheck, FaUpload } from "react-icons/fa6";
import { Print } from "@/models/print.interface";

interface printCardProps {
    print?: Print,
    variant?: "default" | "upload"
}

export default function PrintCard({print, variant="default"}: printCardProps) {
    const [selected, setSelected] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null);

    const isUpload = variant === "upload";

    const handleClick = () => {
        if (isUpload) {
            if (!uploadedImage) {
                inputRef.current?.click();
                setSelected(true);
                return;
            }

            if (selected) {
                const confirmUnselect = window.confirm("Deseja remover a seleção da sua estampa?");
                if (confirmUnselect) {
                    setSelected(false);
                    setUploadedImage(null);
                }
            } else {
                setSelected(true);
            }

        } else {
            setSelected(!selected);
        }
    };

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => setUploadedImage(reader.result as string)
            reader.readAsDataURL(file)
        }
    }

    return(
        <div 
            onClick={handleClick}
            className={`
                relative w-[200px] shrink-0 bg-white rounded-xl overflow-hidden shadow-md border-2 transition-all duration-300 ease-in-out cursor-pointer
                ${selected ? 'border-blue-500 bg-blue-50' : `${!isUpload ? 'border-transparent': ''} hover:translate-y-1 hover:shadow-xl`}
                ${isUpload ? 'bg-[#f8fafc] border-dashed border-2 border-[#cbd5e1] hover:border-[#3b82f6] hover:bg-[#f0f7ff]': ''}
            `}
        >
            <div className="relative h-[250px] overflow-hidden">
                {!isUpload ? 
                    (
                        <Image
                            src={print?.image_url ?? imagePlaceholder}
                            alt={print?.name ?? "Estampa"} 
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="assets/image_placeholder.svg"
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                    ) : ( 
                        <>
                        {!uploadedImage ? (
                            <div className="flex flex-col items-center justify-center h-full text-[#64748b] text-center p-4 hover:text-blue-500">
                                <input
                                    ref={inputRef}
                                    type="file"
                                    id="file-input"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="absolute w-full h-full hidden"
                                />
                                <FaUpload className="relative mb-2 w-8 h-8 " />
                                <p className="relative m-0 text-sm">Envie sua própria estampa</p>
                            </div>
                        ) : (
                            <Image 
                                src={uploadedImage}
                                alt="Imagem do cliente"
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                            />
                        )}
                        </>
                    ) 
                }  
            </div>
            <div
                className={`
                    absolute top-[15px] right-[15px] w-[30px] h-[30px] bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-[0.9rem] transition-all duration-300 
                    ${selected ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}
                `}
            >
                <FaCheck />
            </div>
            <div className="p-6 text-center">
                <h3 className="text-[1.1rem] text-slate-800 font-semibold mb-2">{!isUpload ? `${print?.name ?? "Estampa"}` : 'Personalizada'}</h3>
                <p className="text-[0.9rem] text-slate-500">{!isUpload ? print?.code : 'Sua criação'}</p>
            </div>
        </div>
    );
};

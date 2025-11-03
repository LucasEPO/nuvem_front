import Image from "next/image";
import heroImage from '@/public/assets/heroImage.png';
import Highlight from "@/components/ui/Highlight";
import CategoryBanner from "@/components/ui/CategoryBanner";
import ProductCard from "@/components/ui/ProductCard";

export default function Home() {
  return (
    <>
    <section className="w-full px-5 flex justify-center mt-5">
      <div className="w-[90%] max-w-[1200px] overflow-hidden rounded-xl relative">
      <Image
        src={heroImage}
        alt="Hero"
        priority
        className="w-full h-auto min-h-[300px] max-h-[600px] block"
      />
      </div> 
    </section>
    <section className="flex flex-col text-center p-5 my-4 items-center">
      <h2 className="mb-4 text-black font-bold">Destaques</h2>
      <div className="w-[90%] flex justify-center items-center gap-8 flex-wrap">
        <Highlight />
        <Highlight />
        <Highlight />
        <Highlight />
        <Highlight />
      </div>
    </section>
    <section className="my-2 flex flex-col text-center p-5 items-center">
      <h2 className="text-4xl text-[hex(#f8fafc)] tracking-[3px] mb-3 uppercase font-extrabold [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">Categorias</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-[90%] h-[200px] gap-8">
        <CategoryBanner />
        <CategoryBanner />
      </div>
    </section>
    <section className="flex flex-col text-center p-5 my-4 items-center">
      <h2 className="mb-4 text-black font-bold">Produtos</h2>
      <div className="flex flex-wrap justify-center w-[90%] max-md:w-full items-stretch gap-5 max-md:gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
    <section className="flex flex-col justify-center items-center py-16 w-[90%] ">

    </section>
    </>
  );
}

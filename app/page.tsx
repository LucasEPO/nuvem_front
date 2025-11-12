import Image from "next/image";
import heroImage from '@/public/assets/heroImage.png';
import Highlight from "@/components/ui/Highlight";
import CategoryBanner from "@/components/ui/CategoryBanner";
import ProductCard from "@/components/ui/ProductCard";
import PrintCard from "@/components/ui/PrintCard";
import ReviewPost from "@/components/ui/ReviewPost";
import ReviewForm from "@/components/ui/ReviewForm";
import { loadHomeData } from "@/controllers/home";

export default async function Home() {
  const { categories, collections, prints } = await loadHomeData();

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
        {collections.map((col) => (
          <Highlight key={col.collection_id} collection={col} />
        ))}
      </div>
    </section>
    <section className="my-2 flex flex-col text-center p-5 items-center">
      <h2 className="text-4xl text-[hex(#f8fafc)] tracking-[3px] mb-3 uppercase font-extrabold [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">Categorias</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-[90%] h-[200px] max-md:h-[300px] gap-8">
        {categories.map((cat) => (
          <CategoryBanner key={cat.category_id} category={cat} />
        ))}
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
    <section className="flex flex-col justify-center items-center py-16">
      <div className="w-[90%]">
        <h2 className="text-center uppercase text-4xl mb-4 font-extrabold relative text-[#1a2a4a] tracking-[1px] after:content-[''] after:block after:w-20 after:h-1 after:bg-linear-to-r after:from-blue-500 after:to-sky-400 after:my-4 after:mx-auto after:mb-8 after:rounded ">Escolha sua estampa!</h2>
        <p className="text-center text-[#64748b] text-lg mb-12 font-normal">Selecione nossas estampas ou envie a sua própria</p>
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {prints.map((print) => (
            <PrintCard key={print.print_id} print={print} />
          ))}
          <PrintCard variant="upload"/>
        </div>
      </div>
    </section>
    <section className="flex flex-col justify-center items-center py-16">
      <div className="w-[70%] flex flex-col justify-center items-center">
        <h2 className="text-center text-4xl mb-4 font-extrabold relative text-[#1a2a4a] tracking-[1px] after:content-[''] after:block after:w-20 after:h-1 after:bg-linear-to-r after:from-blue-500 after:to-sky-400 after:my-4 after:mx-auto after:mb-8 after:rounded max-md:text-2xl">Avaliações de clientes!</h2>
        <ReviewPost />
        <ReviewForm />
      </div>
    </section>
    </>
  );
}

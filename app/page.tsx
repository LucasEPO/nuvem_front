import Image from "next/image";
import heroImage from '@/public/assets/heroImage.png';
import Highlight from "@/components/ui/Highlight";

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
      <h2 className="mb-4 text-white font-bold">Destaques</h2>
      <div className="w-[90%] flex justify-center items-center gap-8 flex-wrap">
        <Highlight />
        <Highlight />
        <Highlight />
        <Highlight />
        <Highlight />
      </div>
    </section>
    </>
  );
}

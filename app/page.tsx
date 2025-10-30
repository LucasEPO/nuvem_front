import Image from "next/image";
import heroImage from '@/public/assets/heroImage.png';

export default function Home() {
  return (
    <section className="w-full  relative px-5 flex justify-center mt-5">
      <div className="w-[90%] max-w-[1200px] overflow-hidden rounded-xl relative">
      <Image
        src={heroImage}
        alt="Hero"
        priority
        className="w-full h-auto min-h-[300px] max-h-[600px] block"
      />
      </div> 
    </section>
  );
}

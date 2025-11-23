'use client'
import { FaUser } from "react-icons/fa6";
import HamburguerMenu from "../ui/HamburguerMenu";
import HeaderButtons from "../ui/HeaderButtons";
import Searchbar from "../ui/Searchbar";
import { FaShoppingCart } from "react-icons/fa";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <nav className="bg-[rgb(1,43,68)] p-4 text-white top-0 left-0 w-full flex items-center justify-between h-auto sm:h-16">
            <HamburguerMenu />
            <div className="flex flex-col sm:flex-row items-center sm:items-center w-full sm:w-auto gap-2 sm:gap-4 mx-2 sm:mx-0 ">
                <Image
                    src={logo}
                    alt="Logo"
                    width={120}
                    height={40}
                    className="h-14 w-auto"
                />       
                <div className="grow w-full sm:w-auto">
                    <Searchbar />
                </div>
            </div>
            <div className="flex gap-2">
                <HeaderButtons icon={FaShoppingCart} label="Carrinho" onClick={() => {router.push("/cart")}}/>
                <HeaderButtons icon={FaUser} label="Cadastrar" onClick={() => {router.push("/signup")}}/>
            </div>
        </nav>
    );
};

'use client';
import { FaXmark } from "react-icons/fa6";
import SidebarMenuItem from "./SidebarMenuItem";

interface SidebarProps {
  toggleMenu: () => void;
}

export default function Sidebar({ toggleMenu }: SidebarProps) {
  return (
  <>
    <div className="fixed top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.5)] z-10" onClick={toggleMenu}></div>
    <aside className="fixed top-0 left-0 h-full w-1/4 bg-[rgb(1,43,68)] text-white shadow-lg z-20">
      <div className="flex items-center justify-between px-4 h-16 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={toggleMenu} className="p-2 hover:bg-gray-900 rounded-lg cursor-pointer">
          <FaXmark size={20} />
        </button>
      </div>

      <nav className="flex flex-col p-4 text-white space-y-3 gap-5">
        <SidebarMenuItem label="Home" linkTo="/"/>
        <SidebarMenuItem label="Produtos" linkTo="/products"/>
        <SidebarMenuItem label="Guia de Medidas"/>
      </nav>
    </aside>
    </>
  );
};

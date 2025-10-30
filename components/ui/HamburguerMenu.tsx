"use client";

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Sidebar from "./Sidebar";

export default function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
     
    <button 
    onClick={toggleMenu}
    className="p-2 rounded-lg hover:bg-gray-900 transition cursor-pointer"
    aria-label="Abrir menu"
    >
      {isOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
    </button>
    

    {isOpen && <Sidebar toggleMenu={toggleMenu}/>}
    </>
  );
};

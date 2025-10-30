import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  return (
    <div className="flex">
      <input
        type="search"
        placeholder="Buscar Produtos ..."
        className="border-solid border border-gray-400 bg-gray-700 px-2 rounded-l-md w-full sm:w-auto h-10"
      />
      <button 
        type="submit"
        className="text-white bg-blue-400 px-4 py-2 rounded-r-md "
      >
        <span className="sm:hidden">
          <FaSearch />
        </span>

        <span className="hidden sm:inline">
          Buscar
        </span>
      </button>
    </div>
  );
};

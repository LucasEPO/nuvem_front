import { IconType } from "react-icons";

interface headerButtonsProps {
  icon: IconType,
  label: string,
  onClick?: () => void; 
}

export default function HeaderButtons({icon: Icon, label, onClick}: headerButtonsProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 py-2 px-4 bg-transparent text-white text-sm cursor-pointer rounded-lg hover:bg-gray-900 transition"
    >
      <Icon className="w-4 h-4"/>
      <span className="hidden md:inline">{label}</span>
    </button>
  );
};

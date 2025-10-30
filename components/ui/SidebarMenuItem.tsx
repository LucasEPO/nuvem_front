import Link from "next/link";

interface SidebarMenuItemProps {
  label: string;
  linkTo?: string;
}

export default function SidebarMenuItem({ label, linkTo }: SidebarMenuItemProps) {
  return (
    <Link
      href={linkTo || "#"}
      className="relative text-base px-3 py-2 rounded hover:bg-gray-900/30
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-0.5 after:w-0 after:bg-blue-300 hover:text-blue-300 after:transition-all
        after:duration-300 hover:after:w-full"
    >
      {label}
    </Link>
  ); 
};

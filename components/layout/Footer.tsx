import Link from "next/link";

const footerLinksSupport = [
  { label: "Verificar status do pedido", href: "#" },
  { label: "Envio e devoluções", href: "#" },
  { label: "Ajuda / FAQ", href: "#" },
  { label: "Termos de uso", href: "#" },
  { label: "Instruções de montanha", href: "#" },
  { label: "Fale conosco", href: "#" },
  { label: "Política de privacidade", href: "#" },
];

const footerLinksAbout = [
  { label: "O que é a Displace?", href: "#" },
  { label: "Clube Displace", href: "#" },
  { label: "Sobre nós", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Carreiras", href: "#" },
  { label: "Direitos autorais", href: "#" },
];

const footerLinksEarn = [
    { label: "Venda sua arte", href: "#" },
];

const footerLinksFind = [
    { label: "Instagram", href: "#" },
    { label: "Tik Tok", href: "#" },
    { label: "Whatsapp", href: "#" },
    { label: "Facebook", href: "#" },
];

export default function Footer() {
    return (
        <div className="bg-[#1a2a4a] text-[#f0f4f8] pt-12 px-8 pb-6 leading-relaxed">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 w-[90%] mt-0 mx-auto mb-8 max-md:gird-cols-[repeat(2, 1fr)] max-sm:grid-cols-1">
                <div className="mb-6">
                    <h3 className="text-white text-lg font-semibold mb-5 tracking-wide relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#4dabf7] max-sm:text-">
                        Suporte
                    </h3>
                    <ul className="p-0 list-unstyled m-0 text-sm">
                        {footerLinksSupport.map(({ label, href }) => (
                            <li key={label} className="mb-3">
                            <Link
                                href={href}
                                className="text-[#dbe2ef] no-underline transition-all duration-300 ease-in-out text-[0.95rem] inline-block hover:text-[#4dabf7] hover:translate-x-[3px]"
                            >
                                {label}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-white text-lg font-semibold mb-5 tracking-wide relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#4dabf7]">
                        Sobre
                    </h3>
                    <ul className="p-0 list-unstyled m-0 text-sm">
                        {footerLinksAbout.map(({ label, href }) => (
                            <li key={label} className="mb-3">
                            <Link
                                href={href}
                                className="text-[#dbe2ef] no-underline transition-all duration-300 ease-in-out text-[0.95rem] inline-block hover:text-[#4dabf7] hover:translate-x-[3px]"
                            >
                                {label}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-white text-lg font-semibold mb-5 tracking-wide relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#4dabf7]">
                        Ganhe com Displats
                    </h3>
                    <ul className="p-0 list-unstyled m-0 text-sm">
                        {footerLinksEarn.map(({ label, href }) => (
                            <li key={label} className="mb-3">
                            <Link
                                href={href}
                                className="text-[#dbe2ef] no-underline transition-all duration-300 ease-in-out text-[0.95rem] inline-block hover:text-[#4dabf7] hover:translate-x-[3px]"
                            >
                                {label}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-white text-lg font-semibold mb-5 tracking-wide relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#4dabf7]">
                        Nos Siga
                    </h3>
                    <ul className="p-0 list-unstyled m-0 text-sm">
                        {footerLinksFind.map(({ label, href }) => (
                            <li key={label} className="mb-3">
                            <Link
                                href={href}
                                className="text-[#dbe2ef] no-underline transition-all duration-300 ease-in-out text-[0.95rem] inline-block hover:text-[#4dabf7] hover:translate-x-[3px]"
                            >
                                {label}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10 max-w-[1200px] mx-auto">
                <p className="text-[#a8c5e0] text-[0.9rem] mb-2">© todos os direitos reservados Geekozl</p>
                
                <div className="my-3">
                    <Link href="#" className="text-[#a8c5e0] text-[0.85rem] no-underline transition-colors duration-300 hover:text-[#4dabf7] hover:underline">
                        Política de Privacidade
                    </Link>
                    <span className="text-white/30 mx-1">/</span>
                    <Link href="#" className="text-[#a8c5e0] text-[0.85rem] no-underline transition-colors duration-300 hover:text-[#4dabf7] hover:underline">
                        Termos Gerais
                    </Link>
                    <span className="text-white/30 mx-1">/</span>
                    <Link href="#" className="text-[#a8c5e0] text-[0.85rem] no-underline transition-colors duration-300 hover:text-[#4dabf7] hover:underline">
                        Política de Devolução
                    </Link>
                </div>
            </div>
        </div>
    );
};

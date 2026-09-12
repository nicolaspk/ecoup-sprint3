import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const linkBaseClass = "block text-center text-white font-bold py-[10px] px-[15px] rounded-[8px] transition-all duration-250 whitespace-nowrap";
  const linkActiveClass = "bg-[#00f5c8]/10 text-[#00f5c8]";
  const linkHoverClass = "hover:bg-[#00f5c8]/10 hover:text-[#00f5c8]";

  const getLinkClass = (path: string) => {
    return ${linkBaseClass} ${location.pathname === path ? linkActiveClass : linkHoverClass};
  };

  return (
    <header className="bg-[#10172a] py-[15px] px-[5%] flex justify-between items-center border-b border-white/10 fixed top-0 left-0 w-full z-[1000] shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-[15px]">
        <h1 className="text-[#00f5c8] text-[1.8rem] tracking-[1px] [text-shadow:0_0_30px_rgba(0,245,200,0.25)] m-0 font-bold">
          ECOUP
        </h1>
      </div>

      <button
        id="btn-mobile"
        className="block md:hidden border border-[#00f5c8] text-[#00f5c8] py-[8px] px-[15px] rounded-[6px] cursor-pointer text-[1rem] uppercase bg-transparent"
        onClick={toggleMenu}
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        aria-label="Abrir ou fechar menu de navegação"
      >
        {menuAberto ? "Fechar" : "Menu"}
      </button>

      <nav
        id="menu-principal"
        className={${menuAberto ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-[#10172a] md:bg-transparent border-b border-white/10 md:border-none shadow-[0_10px_20px_rgba(0,0,0,0.5)] md:shadow-none}
        aria-label="Navegação Principal"
      >
        <ul className="flex flex-col md:flex-row items-stretch md:items-center w-full md:w-auto gap-[8px] md:gap-[15px] p-[15px_5%] md:p-0 list-none m-0">
          <li><Link to="/" className={getLinkClass('/')}>Início</Link></li>
          <li><Link to="/sobre" className={getLinkClass('/sobre')}>Sobre</Link></li>
          <li><Link to="/faq" className={getLinkClass('/faq')}>FAQ</Link></li>
          <li><Link to="/contato" className={getLinkClass('/contato')}>Contato</Link></li>
          <li><Link to="/integrantes" className={getLinkClass('/integrantes')}>Quem Somos</Link></li>
          <li><Link to="/simulador" className={getLinkClass('/simulador')}>Protótipo</Link></li>
          <li><Link to="/dashboard" className={getLinkClass('/dashboard')}>Solução (Dashboard)</Link></li>
        </ul>
      </nav>
    </header>
  );
}
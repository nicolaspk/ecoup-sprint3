import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
const [menuAberto, setMenuAberto] = useState(false);

const toggleMenu = () => setMenuAberto(!menuAberto);

const linkClass = "block text-center text-white font-bold py-[10px] px-[15px] rounded-[8px] transition-all duration-250 whitespace-nowrap hover:bg-[#00f5c8]/10 hover:text-[#00f5c8]";

return (
<header className="bg-[#10172a] py-[15px] px-[5%] flex justify-between items-center border-b border-white/10 fixed top-0 left-0 w-full z-[1000] shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-[15px]">
<h1 className="text-[#00f5c8] text-[1.8rem] tracking-[1px] m-0 font-bold">
ECOUP
</h1>
</div>

<button
className="block md:hidden border border-[#00f5c8] text-[#00f5c8] py-[8px] px-[15px] rounded-[6px] cursor-pointer text-[1rem] uppercase bg-transparent"
onClick={toggleMenu}
>
{menuAberto ? "Fechar" : "Menu"}
</button>

<nav className={`${menuAberto ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-[#10172a] md:bg-transparent border-b border-white/10 md:border-none shadow-[0_10px_20px_rgba(0,0,0,0.5)] md:shadow-none`}>
<ul className="flex flex-col md:flex-row items-stretch md:items-center w-full md:w-auto gap-[8px] md:gap-[15px] p-[15px_5%] md:p-0 list-none m-0">
<li><Link to="/" className={linkClass}>Início</Link></li>
<li><Link to="/sobre" className={linkClass}>Sobre</Link></li>
<li><Link to="/faq" className={linkClass}>FAQ</Link></li>
<li><Link to="/contato" className={linkClass}>Contato</Link></li>
<li><Link to="/integrantes" className={linkClass}>Quem Somos</Link></li>
<li><Link to="/simulador" className={linkClass}>Protótipo</Link></li>
<li><Link to="/dashboard" className={linkClass}>Solução (Dashboard)</Link></li>
          <li><Link to="/recompensas" className={linkClass}>Recompensas</Link></li>
</ul>
</nav>
</header>
);
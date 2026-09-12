import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Faq from '../pages/Faq';
import Contato from '../pages/Contato';
import Integrantes from '../pages/Integrantes';
import Simulador from '../pages/Simulador';
import Dashboard from '../pages/Dashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Footer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    <div className="bg-[#050816] text-[#ffffff] min-h-screen flex flex-col font-sans overflow-x-hidden">
        <Header />
        
        {/* Container principal simulando a antiga tag main */}
        <main className="mt-[100px] p-[40px_5%] max-w-[1400px] mx-auto w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/simulador" element={<Simulador />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

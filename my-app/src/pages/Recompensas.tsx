import FeatureCard from '../components/FeatureCard';

export default function Recompensas() {
  return (
    <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] border border-white/5">
      <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[15px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Catálogo de Recompensas</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">Troque seus Pontos Ecoa acumulados por benefícios reais em nossa rede de parceiros sustentáveis.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <FeatureCard 
          title="Subsídio na Energia" 
          description="O topo do ranking mensal ganha isenção total na conta de luz." 
          icon="⚡"
        />
        <FeatureCard 
          title="Desconto em Transporte" 
          description="Troque 50 pontos por créditos em aplicativos de mobilidade urbana." 
          icon="🚲"
        />
        <FeatureCard 
          title="Produtos Ecológicos" 
          description="Resgate kits de sustentabilidade para o seu dia a dia por 80 pontos." 
          icon="♻️"
        />
        <FeatureCard 
          title="Cursos Online" 
          description="Acesso a cursos de educação ambiental na plataforma parceira por 40 pontos." 
          icon="📚"
        />
        <FeatureCard 
          title="Doação para ONGs" 
          description="Converta seus pontos em doações financeiras para instituições de preservação." 
          icon="💚"
        />
        <FeatureCard 
          title="Ingressos Culturais" 
          description="Troque 60 pontos por entradas em museus e eventos de conscientização." 
          icon="🎟️"
        />
      </div>
    </section>
  );
}
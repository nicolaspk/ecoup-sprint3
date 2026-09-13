
{modalAtivo && (
<div className="fixed top-0 left-0 w-full h-full bg-[#0b132b]/95 flex justify-center items-center z-[9999]">
        
          <div className="bg-[#10172a] p-[30px_15px] md:p-[45px_30px] rounded-[18px] text-center max-w-[480px] w-[95%] border-[2px] border-[#00f5c8] shadow-[0_0_35px_rgba(0,210,138,0.35)]">
<div className="text-[3rem] md:text-[4rem] mb-[15px]">📊</div>
<h2 className="text-white text-[1.4rem] md:text-[1.6rem] font-bold mb-[15px]">{metricaAtual.titulo}</h2>
<p className="text-[#00f5c8] text-[1.6rem] md:text-[2.2rem] font-bold mb-[20px]">{metricaAtual.valor}</p>
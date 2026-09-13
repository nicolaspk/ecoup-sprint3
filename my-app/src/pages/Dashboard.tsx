import { useState } from 'react';

export default function Dashboard() {
const [modalAtivo, setModalAtivo] = useState(false);
const [metricaAtual, setMetricaAtual] = useState({ titulo: '', valor: '' });

@@ -38,7 +37,6 @@ export default function Dashboard() {
</article>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
<div className="bg-[#121a2f] p-[25px_15px] md:p-[40px_30px] rounded-[12px] border border-white/5">
<h3 className="text-white text-[1.4rem] font-bold mb-[20px]">Volume de Eventos por Mês (2026)</h3>
@@ -57,7 +55,6 @@ export default function Dashboard() {
</div>
</div>

{modalAtivo && (
<div className="fixed top-0 left-0 w-full h-full bg-[#0b132b]/95 flex justify-center items-center z-[9999]">
<div className="bg-[#10172a] p-[30px_15px] md:p-[45px_30px] rounded-[18px] text-center max-w-[480px] w-[95%] border-[2px] border-[#00f5c8] shadow-[0_0_35px_rgba(0,210,138,0.35)] animate-[modalSlideIn_0.4s_ease-out_forwards]">
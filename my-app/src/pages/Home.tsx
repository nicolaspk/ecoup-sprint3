export default function Home() {
return (
<>
<section className="flex flex-col md:flex-row items-center justify-between gap-[40px] bg-[#10172a] p-[40px_20px] md:p-[60px_40px] rounded-[16px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] mb-[50px] border border-[#00f5c8]/20 text-center md:text-left">
<div className="flex-1">
<h2 className="text-[2.2rem] md:text-[3rem] text-white mb-[20px] leading-[1.2] font-bold">
@@ -24,7 +23,6 @@ export default function Home() {
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[50px]">
<FeatureCard 
title="1. Ação no Dia a Dia"
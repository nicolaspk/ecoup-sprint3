const onSubmit: SubmitHandler<ContatoFormInputs> = (data) => {
console.log("Dados capturados com sucesso:", data);
  
reset();
};

@@ -30,7 +28,6 @@ export default function Contato() {
Tem dúvidas sobre a implementação da gamificação ou deseja suporte comercial? Envie sua mensagem para a nossa equipe.
</p>

<div className="w-full bg-[#10172a] p-[40px_20px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 border-t-[4px] border-t-[#00f5c8]">

{isSubmitSuccessful && (
@@ -41,7 +38,6 @@ export default function Contato() {

<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px] text-left">

<div className="flex flex-col gap-[8px]">
<label htmlFor="nome" className="text-white font-bold">Nome Completo</label>
<input
@@ -54,7 +50,6 @@ export default function Contato() {
{errors.nome && <span className="text-[#ff4d6d] text-[0.9rem] font-bold mt-[4px]">{errors.nome.message}</span>}
</div>

<div className="flex flex-col gap-[8px]">
<label htmlFor="email" className="text-white font-bold">E-mail Corporativo</label>
<input
@@ -73,7 +68,6 @@ export default function Contato() {
{errors.email && <span className="text-[#ff4d6d] text-[0.9rem] font-bold mt-[4px]">{errors.email.message}</span>}
</div>

<div className="flex flex-col gap-[8px]">
<label htmlFor="mensagem" className="text-white font-bold">Sua Mensagem</label>
<textarea
@@ -86,7 +80,6 @@ export default function Contato() {
{errors.mensagem && <span className="text-[#ff4d6d] text-[0.9rem] font-bold mt-[4px]">{errors.mensagem.message}</span>}
</div>

<button 
type="submit" 
className="w-full mt-[10px] bg-[#00f5c8] text-[#050816] py-[15px] px-[30px] font-bold rounded-[30px] transition-all duration-250 border-none text-center uppercase tracking-[1px] shadow-[0_0_30px_rgba(0,245,200,0.25)] hover:bg-[#00ddb3] hover:-translate-y-[3px] hover:shadow-[0_0_25px_rgba(0,210,138,0.8)] cursor-pointer"
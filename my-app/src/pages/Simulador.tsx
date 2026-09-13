const [modalSucesso, setModalSucesso] = useState(false);
const [erro, setErro] = useState(false);

useEffect(() => {
let timer: ReturnType<typeof setTimeout>;

@@ -76,7 +75,6 @@ export default function Simulador() {

<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[35px] items-start">

<div className="bg-[#10172a] p-[25px] md:p-[45px_35px] rounded-[14px] border border-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] min-h-[450px] flex flex-col justify-center">

{step === 0 && (
@@ -149,7 +147,6 @@ export default function Simulador() {
)}
</div>

<aside className="flex flex-col gap-[25px]">
<div className="bg-[#10172a] p-[30px] rounded-[14px] border border-[#00f5c8]/20 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
<div className="flex flex-col items-center gap-[10px] mb-[15px]">
@@ -171,7 +168,6 @@ export default function Simulador() {
</aside>
</div>

{modalSucesso && (
<div className="fixed top-0 left-0 w-full h-full bg-[#0b132b]/95 flex justify-center items-center z-[9999]">
<div className="bg-[#10172a] p-[45px_30px] rounded-[18px] text-center max-w-[480px] w-[95%] border-[2px] border-[#00f5c8] shadow-[0_0_35px_rgba(0,210,138,0.35)] animate-[modalSlideIn_0.4s_ease-out_forwards]">
export default function AppRoutes() {
return (
<BrowserRouter>
<div className="bg-[#050816] text-[#ffffff] min-h-screen flex flex-col font-sans overflow-x-hidden">
<Header />

<main className="mt-[100px] p-[40px_5%] max-w-[1400px] mx-auto w-full flex-grow">
<Routes>
<Route path="/" element={<Home />} />
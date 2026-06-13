import { useState } from "react"; // 1. useState mütləq import olunmalıdır
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home"
import Sergiler from "./components/pages/sergiler/Sergiler";
import KesfEt from "./components/pages/kesf-et/KesfEt";
import Haqqimizda from "./components/pages/haqqimizda/Haqqimizda";
import Elaqe from "./components/pages/elaqe/Elaqe";
import NotFoundPage from "./components/pages/not-found/NotFoundPage";
import AuthLayout from "./components/auth/AuthLayout";

export default function App() {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [step, setStep] = useState("sanatkar-login");

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        
        {/* Giriş səhifəsində deyiliksə Header görünsün */}
        {!isAuthPage && <Header setIsAuthPage={setIsAuthPage} setStep={setStep} />}
        
        {isAuthPage ? (
          /* Giriş səhifəsi strukturu */
          <AuthLayout step={step} setStep={setStep} setIsAuthPage={setIsAuthPage} />
        ) : (
          /* Normal sayt strukturu (Header-dən başqa qalan hissə) */
          <>
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sergiler" element={<Sergiler />} />
                <Route path="/keshf-et" element={<KesfEt />} />
                <Route path="/haqqimizda" element={<Haqqimizda />} />
                <Route path="/elaqe" element={<Elaqe />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}

      </div>
    </BrowserRouter>
  );
}
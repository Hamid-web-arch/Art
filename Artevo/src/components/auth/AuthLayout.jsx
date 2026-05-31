import SnatkarLogin from "./SnatkarLogin";
import AliciLogin from "./AliciLogin";
import Register from "./Register";
import SmsVerification from "./SmsVerification";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import CompleteProfile from "./CompleteProfile";

import AuthIllustration from "../../assets/auth-illustration.png";

export default function AuthLayout({step, setStep, setIsAuthPage}) {


  // Hər komponentə keçid edə bilmək üçün funksiyanı idarə edirik
  const renderForm = () => {
    switch (step) {
      case "sanatkar-login":
        return <SnatkarLogin setStep={setStep} setIsAuthPage={setIsAuthPage} />;
      case "alici-login":
        return <AliciLogin setStep={setStep} setIsAuthPage={setIsAuthPage} />;
      case "register":
        return <Register setStep={setStep} setIsAuthPage={setIsAuthPage} />;
      case "sms-verification":
        return <SmsVerification setStep={setStep} setIsAuthPage={setIsAuthPage} />;
      case "forgot-password":
        return <ForgotPassword setStep={setStep} setIsAuthPage={setIsAuthPage} />;
      case "reset-password":
        return <ResetPassword setStep={setStep} setIsAuthPage={setIsAuthPage} />;
      case "complete-profile":
        return <CompleteProfile setStep={setStep} setIsAuthPage={setIsAuthPage} />;
      default:
        return <SnatkarLogin setStep={setStep} setIsAuthPage={setIsAuthPage} />;
    }
  };

 return (
  <div className="flex h-screen w-full bg-white font-inter overflow-hidden">
    {/* Sol Tərəf - İllüstrasiya */}
    <div className="hidden lg:flex w-1/2 bg-[#F9F9F9] items-center justify-center p-12 h-full">
      <img 
        src={AuthIllustration}
        alt="Artevo Portal" 
        className="max-w-[85%] h-auto object-contain select-none"
      />
    </div>

    {/* Sağ Tərəf - Form Konteyneri (Dəyişən hissə) */}
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 md:p-8 h-full overflow-y-auto">
      <div className="w-full max-w-[440px] flex flex-col justify-center min-h-full py-4 transition-all duration-300">
        {renderForm()}
      </div>
    </div>
  </div>
);
}
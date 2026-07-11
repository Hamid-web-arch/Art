import { useState } from "react";

export default function Button({ setIsAuthPage, setStep }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleAuthClick = (targetStep) => {
        setIsAuthPage(true);
        setStep(targetStep);
        setIsOpen(false);
    };

    // Əsas "Giriş" düyməsinə klik
    const handleMainButtonClick = () => {
        const isMobile = window.matchMedia("(max-width: 767px)").matches; // md breakpointinizlə eyni

        if (isMobile && !isOpen) {
            // Mobil + ilk klik -> yönləndirmə, sadəcə aç
            setIsOpen(true);
            return;
        }

        // Desktop, ya da mobil-də artıq açıqdırsa -> defolt olaraq satıcıya yönləndir
        handleAuthClick("sanatkar-login");
    };

    return (
        <div
            className="flex-1 max-w-[160px] md:max-w-[240px] h-[30px] sm:h-[46px] md:h-[54px] relative group font-sans"
        >
            <button
                type="button"
                className="w-full h-full bg-white text-black border border-primary rounded-lg md:rounded-xl group-hover:rounded-b-none text-sm md:text-base font-medium transition-all duration-200 hover:bg-gray-100 cursor-pointer flex items-center justify-center"
            >
                Giriş
            </button>

            <div
                className={`absolute left-0 top-full w-full bg-white border border-t-0 border-primary rounded-b-lg md:rounded-b-xl shadow-lg overflow-hidden transition-all duration-200 z-50
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                group-hover:opacity-100 group-hover:pointer-events-auto`}
            >
                <button
                    type="button"
                    onClick={() => handleAuthClick("sanatkar-login")}
                    className="w-full block text-center py-2 md:py-3.5 text-xs md:text-sm text-black bg-white border-b border-gray-100 transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
                >
                    Satıcı
                </button>
                <button
                    type="button"
                    onClick={() => handleAuthClick("alici-login")}
                    className="w-full block text-center py-2 md:py-3.5 text-xs md:text-sm text-black bg-white transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
                >
                    Alıcı
                </button>
            </div>
        </div>
    );
}
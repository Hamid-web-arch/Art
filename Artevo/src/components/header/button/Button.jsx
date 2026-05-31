
export default function Button({ setIsAuthPage, setStep }) {

    const handleAuthClick = (targetStep) => {
        // 1. Giriş səhifəsi rejiminə keçiririk (App.jsx-dəki state)
        setIsAuthPage(true);

        // 2. Hansı düyməyə kliklənibsə, birbaşa o formanı açırıq (AuthLayout.jsx-dəki state)
        setStep(targetStep);
    };

    return (

        <div
            className="flex-1 max-w-[160px] md:max-w-[240px]  h-[30px] sm:h-[46px] md:h-[54px] relative group font-sans">
            <button onClick={() => handleAuthClick("sanatkar-login")}
                type="button"
                className="w-full h-full bg-white text-black border border-primary rounded-lg md:rounded-xl group-hover:rounded-b-none text-sm md:text-base font-medium transition-all duration-200 hover:bg-gray-100 cursor-pointer flex items-center justify-center">
                Giriş
            </button>

            <div
                className="absolute left-0 top-full w-full bg-white border border-t-0 border-primary rounded-b-lg md:rounded-b-xl shadow-lg overflow-hidden pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-200 z-50">
                <div
                    className="bg-primary text-white text-center py-2 md:py-3.5 text-sm md:text-base font-medium select-none">
                    Seç
                </div>
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
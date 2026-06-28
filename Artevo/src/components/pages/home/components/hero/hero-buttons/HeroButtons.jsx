export default function HeroButtons() {
    return (
        <div className="flex gap-4 sm:gap-6 lg:max-w-[686px] w-full">
           
            <a 
                href="#"
                className="font-inter text-[12px] sm:text-[16px] w-1/2 font-medium text-center text-white border border-button-primary py-2 sm:py-[10px] px-4 sm:px-[24px] rounded-[8px] bg-button-primary transition-all duration-300 hover:bg-transparent hover:text-black cursor-pointer"
            >
                Əsərləri axtarın
            </a>
            
           
            <a 
                href="#"
                className="font-inter text-[12px] sm:text-[16px] w-1/2 font-medium text-center text-black border border-button-primary py-2 sm:py-[10px] px-4 sm:px-[24px] rounded-[8px] transition-all duration-300 hover:bg-button-primary hover:text-white cursor-pointer"
            >
                Daha ətraflı məlumat
            </a>
        </div>
    );
}
export default function AuthButton({ children, variant = "primary", icon, ...props }) {
  const baseClasses = "w-full flex items-center justify-center gap-3 font-medium py-3.5 rounded-lg transition-colors duration-200 cursor-pointer shadow-sm text-sm md:text-base";

  const variants = {
    primary: "bg-[#800000] hover:bg-[#660000] text-white mt-2",
    outline: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300",
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]}`} 
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
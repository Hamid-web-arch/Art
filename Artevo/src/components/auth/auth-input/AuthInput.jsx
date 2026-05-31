export default function AuthInput({ label, type = "text", placeholder, ...props }) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <label className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 text-sm md:text-base"
                {...props}
            />
        </div>
    );
}
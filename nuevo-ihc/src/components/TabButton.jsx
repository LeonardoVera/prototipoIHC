export default function TabButton({ isActive, onClick, children}) {
    
    const baseClasses = "py-3 px-6 rounded-full font-semibold transition-all duration-300 w-full";

    const activeClasses = "bg-purple-600 text-white shadow-md";
    const inactiveClasses = "bg-gray-100 text-gray-700 hover:bg-gray-200";

    return (
        <button
            onClick={onClick}
            className={`
                ${baseClasses}
                ${isActive ? activeClasses : inactiveClasses}
            `}
        >
            {children}
        </button>
    )
}
import { useTabStore } from "../store/useTabStore";

export const ReviewTabMenuComp = ({ icon, tabIndex }: { icon: React.ReactNode; tabIndex: number }) => {
    const { tab, setTab } = useTabStore();

    return (
        <button
            className={`text-3xl
                ${tab === tabIndex ? "text-gray-800" : "text-slate-300"}
            `}
            onClick={() => setTab(tabIndex)}
        >
            {icon}
        </button>
    );
};

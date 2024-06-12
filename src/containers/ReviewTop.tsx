// COMP
import { ReviewTabMenuComp } from "../components/ReviewTabMenuComp";

// STORE
import { useModalStore } from "../store/useModalStore";

import { PiList, PiCards } from "react-icons/pi";

export const ReviewTop = () => {
    const { setModal } = useModalStore();

    return (
        <div className="px-8 flex gap-4 items-end ">
            <h2 className="text-zinc-800 font-black text-5xl">리뷰 게시판</h2>
            <div className="tab-box flex items-end gap-3">
                <ReviewTabMenuComp icon={<PiList />} tabIndex={1} />
                <ReviewTabMenuComp icon={<PiCards />} tabIndex={2} />
            </div>
            <button
                id="modal-btn"
                onClick={() => setModal(true)}
                className="ml-auto ring-gray-800 ring-2 py-1 px-4 rounded-full hover:bg-gray-800 hover:text-blue-50"
            >
                리뷰쓰기
            </button>
        </div>
    );
};

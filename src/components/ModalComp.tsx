// COMP
import { ModalFormComp } from "./ModalFormComp";

// STORE
import { useModalStore } from "../store/useModalStore";

import { IoArrowBack } from "react-icons/io5";

export const ModalComp = () => {
    const { setModal } = useModalStore();

    return (
        <div
            id="modal-box"
            className="w-full min-w-full h-screen backdrop-blur-sm fixed inset-0 grid justify-center items-center"
        >
            <div
                id="modal-contents"
                className="w-[45vw] h-[80vh] bg-white p-6 shadow-xl rounded-xl border-slate-300 border min-w-[600px] relative"
            >
                <IoArrowBack
                    className="text-4xl"
                    onClick={() => {
                        setModal(false);
                    }}
                />

                <h3 className="mt-4 text-3xl font-black text-gray-700">
                    리뷰 작성{" "}
                    <span className="text-[15px] font-extrabold">
                        <b className="text-red-400">*</b>꼭 입력해주세요.
                    </span>
                </h3>

                <ModalFormComp />
            </div>
        </div>
    );
};

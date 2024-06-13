// API
import { jsonManage } from "../services/jsonManage";

// STORE
import { useModalStore } from "../store/useModalStore";

import { useForm } from "react-hook-form";

export const ModalFormComp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        jsonManage(data);
        setModal(false);
    };

    const { setModal } = useModalStore();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className="mt-4 text-[18px] font-semibold">
                    아티스트<span className="text-red-400">*</span>
                </p>
                <input
                    {...register("artist", { required: true })}
                    placeholder="artist"
                    className="w-full leading-10 ps-[5px] text-[15px]"
                />
                {errors.artist && <p>아티스트는 꼭 입력해주세요!</p>}
            </div>

            <div>
                <p className="mt-4 text-[18px] font-semibold">
                    닉네임 <span className="text-red-400">*</span>
                </p>
                <input
                    {...register("nickname", { required: true })}
                    placeholder="nickname"
                    className="w-full leading-10 inline-block ps-[5px] text-[15px]"
                />
                {errors.nickname && <p>닉네임은 꼭 입력해주세요!</p>}
            </div>

            <div>
                <p className="my-4 text-[18px] font-semibold inline-block">
                    비밀번호 <span className="text-red-400">*</span>
                </p>
                <input
                    className="w-full leading-10 ps-[5px] text-[15px] inline-block"
                    type="password"
                    {...register("password", { required: true, minLength: 4 })}
                    placeholder="4글자 이상 입력해주세요."
                />
                {errors.password && <p>비밀번호는 꼭 입력해주세요!</p>}
            </div>

            <div>
                <p className="mt-4 text-[18px] font-semibold">
                    리뷰<span className="text-red-400">*</span>
                </p>
                <input
                    {...register("review", { required: true })}
                    placeholder="review"
                    className="w-full leading-10 inline-block ps-[5px] text-[15px]"
                />
                {errors.review && <p>리뷰는 꼭 입력해주세요!</p>}
            </div>

            <div>
                <p className="mt-4 text-[18px] font-semibold w-full leading-10">
                    추천점수<span className="text-red-400">*</span>
                </p>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                    <label key={score} className="inline-flex items-center cursor-pointer">
                        <input
                            type="radio"
                            value={score}
                            {...register("rating", { required: true, valueAsNumber: true })}
                            className="sr-only peer"
                        />
                        <div
                            className="w-8 h-8 mr-5 flex items-center justify-center bg-gray-200 rounded-full
                         peer-checked:bg-blue-500 peer-checked:text-white"
                        >
                            {score}
                        </div>
                    </label>
                ))}
            </div>

            <button
                type="submit"
                className="absolute bottom-5 right-7 text-[15px] font-semibold ring-2 ring-blue-500 py-1 px-7 rounded-full"
            >
                제출
            </button>
        </form>
    );
};

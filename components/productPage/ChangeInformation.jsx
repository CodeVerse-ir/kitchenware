"use client";

import SvgChangeInformation from "../svg/SvgChangeInformation";

export default function ChangeInformation({ showComment, setShowComment }) {
  return (
    <>
      <SvgChangeInformation />

      {/* <!-- Change Description or Comments --> */}
      <div
        className="flex items-center justify-start w-full mt-5 md:mt-10 p-5 md:p-10 gap-x-10 font-MorabbaMedium text-lg md:text-xl lg:text-2xl text-black dark:text-white bg-white dark:bg-zinc-700 shadow-normal rounded-2xl select-none">
        <div className={`flex items-center justify-start gap-x-2 ${!showComment ? "text-orange-300" : ""}`} onClick={() => setShowComment(false)}>
          <svg className="w-5 h-5 lg:w-6 lg:h-6">
            <use href="#document-text"></use>
          </svg>
          <span>
            توضیحات
          </span>
        </div>
        <div className={`flex items-center justify-start gap-x-2 ${showComment ? "text-orange-300" : ""}`} onClick={() => setShowComment(true)}>
          <svg className="w-5 h-5 lg:w-6 lg:h-6">
            <use href="#chat-bubble"></use>
          </svg>
          <span>
            نظرات
          </span>
        </div>
      </div>
    </>
  )
}

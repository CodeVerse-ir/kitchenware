"use client";

import DarkMode from "../theme/DarkMode";

export default function BtnSwich({ darkMode, handleDarkMode }) {
    return (
        <>
            <DarkMode darkMode={darkMode} />

            {/* <!-- Theme Switch Btn --> */}
            <div className="cursor-pointer" onClick={handleDarkMode}>
                <div className="flex items-center justify-center gap-x-2.5 dark:hidden">
                    <svg className="w-8 h-8">
                        <use href="#moon"></use>
                    </svg>
                </div>
                <div className="hidden dark:flex items-center justify-center gap-x-2.5">
                    <svg className="w-8 h-8">
                        <use href="#sun"></use>
                    </svg>
                </div>
            </div>
        </>
    )
}

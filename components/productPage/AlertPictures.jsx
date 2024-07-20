
export default function AlertPictures() {
    return (
        <>
            <div className="alert-picture">
                <!-- Header -->
                <div className="flex items-center justify-between">
                    <span>
                        تصاویر کالا
                    </span>
                    <svg className="w-5 h-5">
                        <use href="#x-mark">
                        </use>
                    </svg>
                </div>
                <!-- Line -->
                <div className="w-full h-px my-5 bg-gray-300"></div>
                <!-- Body -->
                <div className="">
                    virtual & zoom
                </div>
                <!-- Footer -->
                <div className="flex items-center justify-center w-20 h-10 mt-5 gap-x-1 rounded-full bg-orange-400 text-white">
                    <span>5</span>
                    از
                    <span>5</span>
                </div>
            </div>
        </>
    )
}

"use client";

import { useState } from "react";
import GetData from "../../axios/GetData";

export default function Description({ showComment, productName }) {

    const [product, setProduct] = useState(null);

    return (
        <>
            <GetData setData={setProduct} path={`products?code=${productName}`} />

            {/* Loader */}
            {!product && <div>در حال بارگذاری داده‌ها...</div>}

            {product && <>
                {/* <!-- Description --> */}
                <div
                    className={`${!showComment ? "flex" : "hidden"} flex-col w-full mt-2.5 p-5 md:p-10 text-sm md:text-base lg:text-lg text-black dark:text-white bg-white dark:bg-zinc-700 shadow-normal rounded-2xl gap-y-6`}>
                    {product[0].description.map((item, index) => {
                        return <div key={index} className="">
                            <h4 className="font-DanaBold mb-4 text-base md:text-lg lg:text-xl">
                                {item.title}
                            </h4>
                            {item.text.map((text, index) => {
                                return <p key={index} className="mb-4">
                                    {text.paragraph}
                                </p>
                            })}
                        </div>
                    })}
                </div>
            </>}
        </>
    )
}

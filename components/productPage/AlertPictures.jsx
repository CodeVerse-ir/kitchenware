"use client";

import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Swiper css
import 'swiper/swiper-bundle.css';
import GetData from '../../axios/GetData';
import { useState } from 'react';


export default function AlertPictures({ showPicture, handleShowPicture, productName }) {

    const [pictures, setPictures] = useState(null);

    return (
        <>
            <GetData setData={setPictures} path={`products?code=${productName}`} />

            {/* Loader */}
            {!pictures && <div>در حال بارگذاری داده‌ها...</div>}

            {pictures && <>
                <div className={`${showPicture ? "visible opacity-100" : "invisible opacity-0"} alert-picture`}>
                    {/* <!-- Header --> */}
                    <div className="flex items-center justify-between">
                        <span>
                            تصاویر کالا
                        </span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-orange-300 transition-colors" onClick={handleShowPicture}>
                            <use href="#x-mark">
                            </use>
                        </svg>
                    </div>
                    {/* <!-- Line --> */}
                    <div className="w-full h-px my-5 bg-gray-300"></div>
                    {/* <!-- Body --> */}
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fdba74',
                        }}
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{
                            type: 'fraction',
                        }}

                        className="swiperPicture w-[100%] h-[90%] mx-auto my-auto"
                    >

                        {/* <!-- Slides --> */}
                        {pictures[0].image.map((picture, index) => {
                            return <SwiperSlide key={index}>
                                <Image
                                    className="w-[250px] lg:w-[350px] mx-auto"
                                    src={picture}
                                    alt={`product ${index + 1}`}
                                    width={250}
                                    height={250}
                                    sizes="(min-width: 1024px)"
                                    loading="lazy"
                                />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </>}
        </>
    )
}

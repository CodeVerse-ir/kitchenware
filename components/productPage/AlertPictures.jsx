"use client";

import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Swiper css
import 'swiper/swiper-bundle.css';


import product1 from '../../public/utils/image/products/product1/product1.jpeg';
import product2 from '../../public/utils/image/products/product1/product2.jpeg';
import product3 from '../../public/utils/image/products/product1/product3.jpeg';
import product4 from '../../public/utils/image/products/product1/product4.jpeg';
import product5 from '../../public/utils/image/products/product1/product5.jpeg';
import product6 from '../../public/utils/image/products/product1/product6.jpeg';
import product7 from '../../public/utils/image/products/product1/product7.jpeg';
import product8 from '../../public/utils/image/products/product1/product8.jpeg';
import product9 from '../../public/utils/image/products/product1/product9.jpeg';
import product10 from '../../public/utils/image/products/product1/product10.jpeg';
import product11 from '../../public/utils/image/products/product1/product11.jpeg';


const pictures = [
    {
        image: product1,
    },
    {
        image: product2,
    },
    {
        image: product3,
    },
    {
        image: product4,
    },
    {
        image: product5,
    },
    {
        image: product6,
    },
    {
        image: product7,
    },
    {
        image: product8,
    },
    {
        image: product9,
    },
    {
        image: product10,
    },
    {
        image: product11,
    },
]

export default function AlertPictures({ showPicture, handleShowPicture }) {
    return (
        <>
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
                    {pictures.map((picture, index) => {
                        return <SwiperSlide key={index}>
                            <Image
                                className="w-[250px] lg:w-[350px] mx-auto"
                                src={picture.image}
                                alt={`product ${index + 1}`}
                                sizes="(min-width: 1024px)"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </>
    )
}

"use client";

import Image from 'next/image';
import Link from 'next/link';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Swiper css
import 'swiper/swiper-bundle.css';
import SvgBestSelling from '../svg/SvgBestSelling';
import { useState } from 'react';
import GetData from '../../axios/GetData';

export default function CategoryLoad() {

    const [categories, setCategories] = useState(null);

    return (
        <>
            <GetData setData={setCategories} path="categories" />

            {/* Loader */}
            {!categories && <div>در حال بارگذاری داده‌ها...</div>}

            {categories &&
                <>
                    <SvgBestSelling />

                    <section className="title pt-8 md:pt-40 lg:pt-44">
                        <div className="container">
                            {/* <!-- Section Head --> */}
                            <div className="flex items-center justify-between mb-5 md:mb-12">
                                <h2 className="section-title">
                                    دسته بندی محصولات
                                </h2>
                            </div>
                        </div>
                    </section>

                    {categories.map((category, index) => {
                        return <section key={index} className="category-1 pb-9 md:pb-20">
                            <div className="container">

                                {/* <!-- Section Head --> */}
                                <div className="flex items-center justify-between mb-5 md:mb-4" >

                                    <span className="section-subtitle">
                                        {category.title}
                                    </span>

                                    <div className="flex gap-x-3 md:gap-x-4">
                                        <div
                                            className={`swiper-button-prev-${index + 1} hidden md:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:text-zinc-700 dark:hover:bg-white shadow-normal rounded-full transition-colors -rotate-90`}>
                                            <svg className="w-5 h-5 md:w-[26px] md:h-[26px]">
                                                <use href="#chevron-down-mini"></use>
                                            </svg>
                                        </div>
                                        <div
                                            className={`swiper-button-next-${index + 1} hidden md:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:text-zinc-700 dark:hover:bg-white shadow-normal rounded-full transition-colors rotate-90`}>
                                            <svg className="w-5 h-5 md:w-[26px] md:h-[26px]">
                                                <use href="#chevron-down-mini"></use>
                                            </svg>
                                        </div>
                                    </div>

                                </div>

                                {/* <!-- Slider main container --> */}
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation={{
                                        nextEl: `.swiper-button-next-${index + 1}`,
                                        prevEl: `.swiper-button-prev-${index + 1}`,
                                    }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    rewind={true}
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 5,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 6,
                                            spaceBetween: 20,
                                        },
                                        1280: {
                                            slidesPerView: 8,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    className={`Swiper${index + 1}`}
                                >
                                    {category.body.map((information, index) => {
                                        return <SwiperSlide key={index}>
                                            <Link href={`/products/category/${encodeURIComponent(information.name)}`}
                                                className='flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 rounded-2xl max-w-36 max-h-36 select-none'
                                            >
                                                <Image
                                                    className="w-16 mx-auto md:w-20"
                                                    src={information.image}
                                                    alt={`category ${index + 1}`}
                                                    width={128}
                                                    height={128}
                                                    sizes="(min-width: 768px)"
                                                    loading="lazy"
                                                />

                                                {/* <!-- Cart Title --> */}
                                                <h5
                                                    className="font-DanaMedium text-center text-sm/7 lg:text-md/7 text-zinc-700 dark:text-white line-clamp-1">
                                                    {information.name}
                                                </h5>

                                            </Link>
                                        </SwiperSlide>
                                    })}
                                </Swiper>

                            </div>
                        </section >
                    })}
                </>}
        </>
    )
}

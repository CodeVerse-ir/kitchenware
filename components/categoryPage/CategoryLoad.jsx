"use client";

import category1_1 from '../../public/utils/image/categories/category-1/c1.png';
import category1_2 from '../../public/utils/image/categories/category-1/c2.png';
import category1_3 from '../../public/utils/image/categories/category-1/c3.png';
import category1_4 from '../../public/utils/image/categories/category-1/c4.png';
import category1_5 from '../../public/utils/image/categories/category-1/c5.png';
import category1_6 from '../../public/utils/image/categories/category-1/c6.png';
import category1_7 from '../../public/utils/image/categories/category-1/c7.png';
import category1_8 from '../../public/utils/image/categories/category-1/c8.png';
import category1_9 from '../../public/utils/image/categories/category-1/c9.png';
import category1_10 from '../../public/utils/image/categories/category-1/c10.png';
import category1_11 from '../../public/utils/image/categories/category-1/c11.png';

import category2_1 from '../../public/utils/image/categories/category-2/c1.png';
import category2_2 from '../../public/utils/image/categories/category-2/c2.png';
import category2_3 from '../../public/utils/image/categories/category-2/c3.png';
import category2_4 from '../../public/utils/image/categories/category-2/c4.png';
import category2_5 from '../../public/utils/image/categories/category-2/c5.png';
import category2_6 from '../../public/utils/image/categories/category-2/c6.png';
import category2_7 from '../../public/utils/image/categories/category-2/c7.png';
import category2_8 from '../../public/utils/image/categories/category-2/c8.png';

import category3_1 from '../../public/utils/image/categories/category-3/c1.png';
import category3_2 from '../../public/utils/image/categories/category-3/c2.png';
import category3_3 from '../../public/utils/image/categories/category-3/c3.png';
import category3_4 from '../../public/utils/image/categories/category-3/c4.png';
import category3_5 from '../../public/utils/image/categories/category-3/c5.png';
import category3_6 from '../../public/utils/image/categories/category-3/c6.png';
import category3_7 from '../../public/utils/image/categories/category-3/c7.png';
import category3_8 from '../../public/utils/image/categories/category-3/c8.png';
import category3_9 from '../../public/utils/image/categories/category-3/c9.png';
import category3_10 from '../../public/utils/image/categories/category-3/c10.png';
import category3_11 from '../../public/utils/image/categories/category-3/c11.png';
import category3_12 from '../../public/utils/image/categories/category-3/c12.png';

import category4_1 from '../../public/utils/image/categories/category-4/c1.png';
import category4_2 from '../../public/utils/image/categories/category-4/c2.png';
import category4_3 from '../../public/utils/image/categories/category-4/c3.png';

import category5_1 from '../../public/utils/image/categories/category-5/c1.png';
import category5_2 from '../../public/utils/image/categories/category-5/c2.png';
import category5_3 from '../../public/utils/image/categories/category-5/c3.png';
import category5_4 from '../../public/utils/image/categories/category-5/c4.png';
import category5_5 from '../../public/utils/image/categories/category-5/c5.png';

import category6_1 from '../../public/utils/image/categories/category-6/c1.png';
import category6_2 from '../../public/utils/image/categories/category-6/c2.png';
import category6_3 from '../../public/utils/image/categories/category-6/c3.png';
import category6_4 from '../../public/utils/image/categories/category-6/c4.png';

import category7_1 from '../../public/utils/image/categories/category-7/c1.png';
import category7_2 from '../../public/utils/image/categories/category-7/c2.png';
import category7_3 from '../../public/utils/image/categories/category-7/c3.png';
import category7_4 from '../../public/utils/image/categories/category-7/c4.png';


import Image from 'next/image';
import Link from 'next/link';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Swiper css
import 'swiper/swiper-bundle.css';
import SvgBestSelling from '../svg/SvgBestSelling';

const categories = [
    {
        title: 'لوازم برقی',
        body: [
            {
                name: 'سرخ کن',
                image: category1_1,
                path: '/products/category',
            },
            {
                name: 'ترازوی آشپزخانه',
                image: category1_2,
                path: '/products/category',
            },
            {
                name: 'کارواش خانگی',
                image: category1_3,
                path: '/products/category',
            },
            {
                name: 'دستگاه قهوه ساز',
                image: category1_4,
                path: '/products/category',
            },
            {
                name: 'جارو برقی',
                image: category1_5,
                path: '/products/category',
            },
            {
                name: 'کتری برقی',
                image: category1_6,
                path: '/products/category',
            },
            {
                name: 'چرخ گوشت',
                image: category1_7,
                path: '/products/category',
            },
            {
                name: 'خردکن برقی',
                image: category1_8,
                path: '/products/category',
            },
            {
                name: 'ساندویچ ساز',
                image: category1_9,
                path: '/products/category',
            },
            {
                name: 'مخلوط کن',
                image: category1_10,
                path: '/products/category',
            },
            {
                name: 'چای ساز',
                image: category1_11,
                path: '/products/category',
            }
        ]
    },
    {
        title: 'مراقبت شخصی',
        body: [
            {
                name: 'نام کالا',
                image: category2_1,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category2_2,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category2_3,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category2_4,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category2_5,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category2_6,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category2_7,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category2_8,
                path: '/products/category',
            },
        ]
    },
    {
        title: 'ظروف چینی',
        body: [
            {
                name: 'نام کالا',
                image: category3_1,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_2,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_3,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_4,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_5,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_6,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_7,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_8,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_9,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_10,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_11,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category3_12,
                path: '/products/category',
            },
        ]
    },
    {
        title: 'تجهیزات آشپزخانه',
        body: [
            {
                name: 'نام کالا',
                image: category4_1,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category4_2,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category4_3,
                path: '/products/category',
            },
        ]
    },
    {
        title: 'ظروف سرو و پذیرایی',
        body: [
            {
                name: 'نام کالا',
                image: category5_1,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category5_2,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category5_3,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category5_4,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category5_5,
                path: '/products/category',
            },
        ]
    },
    {
        title: 'قاشق، چنگال و ابزار سرو',
        body: [
            {
                name: 'نام کالا',
                image: category6_1,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category6_2,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category6_3,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category6_4,
                path: '/products/category',
            },
        ]
    },
    {
        title: 'ظروف پخت و پز',
        body: [
            {
                name: 'نام کالا',
                image: category7_1,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category7_2,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category7_3,
                path: '/products/category',
            },
            {
                name: 'نام کالا',
                image: category7_4,
                path: '/products/category',
            },
        ]
    },
];

export default function CategoryLoad() {
    return (
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
                                    <Link href={information.path}
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
        </>
    )
}

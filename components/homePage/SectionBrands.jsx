import brand1 from "../../public/utils/image/brands/b1.png";
import brand2 from "../../public/utils/image/brands/b2.png";
import brand3 from "../../public/utils/image/brands/b3.png";
import brand4 from "../../public/utils/image/brands/b4.png";
import brand5 from "../../public/utils/image/brands/b5.png";
import brand6 from "../../public/utils/image/brands/b6.png";
import brand7 from "../../public/utils/image/brands/b7.png";
import brand8 from "../../public/utils/image/brands/b8.png";
import brand9 from "../../public/utils/image/brands/b9.png";
import brand10 from "../../public/utils/image/brands/b10.png";
import brand11 from "../../public/utils/image/brands/b11.png";
import brand12 from "../../public/utils/image/brands/b12.png";
import brand13 from "../../public/utils/image/brands/b13.png";
import brand14 from "../../public/utils/image/brands/b14.png";
import brand15 from "../../public/utils/image/brands/b15.png";
import brand16 from "../../public/utils/image/brands/b16.png";

import Link from 'next/link';
import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Swiper css
import 'swiper/swiper-bundle.css';

const brands = [
    {
        name: 'فورته',
        image: brand1,
        path: `/products/${encodeURIComponent('فورته')}`,
    },
    {
        name: 'لاوان',
        image: brand2,
        path: `/products/${encodeURIComponent('لاوان')}`,
    },
    {
        name: 'لیمون',
        image: brand3,
        path: `/products/${encodeURIComponent('لیمون')}`,
    },
    {
        name: 'ام جی اس',
        image: brand4,
        path: `/products/${encodeURIComponent('ام جی اس')}`,
    },
    {
        name: 'براون',
        image: brand5,
        path: `/products/${encodeURIComponent('براون')}`,
    },
    {
        name: 'چینی نور',
        image: brand6,
        path: `/products/${encodeURIComponent('چینی نور')}`,
    },
    {
        name: 'چینی زرین',
        image: brand7,
        path: `/products/${encodeURIComponent('چینی زرین')}`,
    },
    {
        name: 'چینی تقدیس',
        image: brand8,
        path: `/products/${encodeURIComponent('چینی تقدیس')}`,
    },
    {
        name: 'زی',
        image: brand9,
        path: `/products/${encodeURIComponent('زی')}`,
    },
    {
        name: 'آبرون',
        image: brand10,
        path: `/products/${encodeURIComponent('آبرون')}`,
    },
    {
        name: 'لورین',
        image: brand11,
        path: `/products/${encodeURIComponent('لورین')}`,
    },
    {
        name: 'ال جی',
        image: brand12,
        path: `/products/${encodeURIComponent('ال جی')}`,
    },
    {
        name: 'اورال بی',
        image: brand13,
        path: `/products/${encodeURIComponent('اورال بی')}`,
    },
    {
        name: 'دالتون',
        image: brand14,
        path: `/products/${encodeURIComponent('دالتون')}`,

    },
    {
        name: 'سب',
        image: brand15,
        path: `/products/${encodeURIComponent('سب')}`,

    },
    {
        name: 'بلک اند دکر',
        image: brand16,
        path: `/products/${encodeURIComponent('بلک اند دکر')}`,

    },
]

export default function SectionBrands() {
    return (
        <>
            <section className="brands mb-8 md:mb-20">
                <div className="container">

                    {/* <!-- Section Head --> */}
                    <div className="flex items-center justify-between mb-5 md:mb-12">

                        <h2 className="section-title">
                            برند ها
                        </h2>

                        <Link href="/brands" className='section-link'>
                            <span className="hidden md:inline-block">
                                مشاهده همه برند ها
                            </span>
                            <span className="inline-block md:hidden">
                                مشاهده همه
                            </span>
                            <svg className="w-4 h-4 lg:w-5 lg:h-5">
                                <use href="#chevron-left"></use>
                            </svg>
                        </Link>

                    </div>

                    {/* <!-- Section Body --> */}
                    <div className="flex items-center justify-between md:gap-x-2">

                        <div
                            className="swiper-button-prev-custom-sec hidden md:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:text-zinc-700 dark:hover:bg-white shadow-normal rounded-full transition-colors -rotate-90">
                            <svg className="w-5 h-5 md:w-[26px] md:h-[26px]">
                                <use href="#chevron-down-mini"></use>
                            </svg>
                        </div>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                nextEl: ".swiper-button-next-custom-sec",
                                prevEl: ".swiper-button-prev-custom-sec",
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            rewind={true}
                            slidesPerView={5}
                            spaceBetween={20}
                            breakpoints={{
                                640: {
                                    slidesPerView: 6,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 6,
                                    spaceBetween: 50,
                                },
                                1280: {
                                    slidesPerView: 8,
                                    spaceBetween: 35,
                                },
                            }
                            }
                            className="mySwiper md:w-[90%]"
                        >
                            {brands.map((brand, index) => {
                                return <SwiperSlide key={index}>
                                    <Link
                                        key={index}
                                        className='max-w-[6.25rem] lg:max-w-25'
                                        href={brand.path}
                                    >
                                        <Image
                                            className="w-14 h-14 lg:w-25 lg:h-25"
                                            src={brand.image}
                                            alt={`product ${index + 1}`}
                                            width={56}
                                            height={56}
                                            // sizes="(min-width: 768px)"
                                            loading="lazy"
                                        />
                                    </Link>
                                </SwiperSlide>
                            })}
                        </Swiper>

                        <div
                            className="swiper-button-next-custom-sec hidden md:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:text-zinc-700 dark:hover:bg-white shadow-normal rounded-full transition-colors rotate-90">
                            <svg className="w-5 h-5 md:w-[26px] md:h-[26px]">
                                <use href="#chevron-down-mini"></use>
                            </svg>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

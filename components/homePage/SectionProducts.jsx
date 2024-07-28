import SvgSectionProducts from '../svg/SvgSectionProducts'

import Image from 'next/image';
import Link from 'next/link';
import Clock from './Clock';
import { useState } from 'react'
import GetData from '../../axios/GetData';

export default function SectionProducts() {

    const [products, setProducts] = useState(null);

    return (
        <>
            <GetData setData={setProducts}path="products?_start=0&_end=8" />

            {/* Loader */}
            {!products && <div>در حال بارگذاری داده‌ها...</div>}

            {products && <>
                <SvgSectionProducts />

                <section className="products pt-8 md:pt-16 lg:pt-24">
                    <div className="container">

                        {/* <!-- Section Head --> */}
                        <div className="flex items-end justify-between mb-5 md:mb-12">

                            <div>
                                <h2 className="section-title">
                                    جدیدترین محصولات
                                </h2>
                                <span className="section-subtitle">
                                    محصولات امروز را از دست نده
                                </span>
                            </div>

                            <Link href="/products" className="section-link">
                                <span className="hidden md:inline-block">
                                    مشاهده همه محصولات
                                </span>
                                <span className="inline-block md:hidden">
                                    مشاهده همه
                                </span>
                                <svg className="w-4 h-4 lg:w-5 lg:h-5">
                                    <use href="#chevron-left"></use>
                                </svg>
                            </Link>

                        </div>

                        {/* <!-- Section Body  --> */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5">

                            {products.map((cart, index) => {
                                return <Link href={`/product/${cart.code}`}
                                    key={index}
                                    className='flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl'
                                >
                                    <div className="relative mb-2 md:mb-5">

                                        <Image
                                            className="mx-auto md:w-auto"
                                            src={cart.image[0]}
                                            alt={`product ${index + 1}`}
                                            width={128}
                                            height={128}
                                            sizes="(min-width: 768px)"
                                            loading="lazy"
                                        />

                                        {/* <!-- discount percent  --> */}
                                        {
                                            cart.discountPercent !== 0 &&
                                            <span
                                                className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                                {cart.discountPercent}%
                                            </span>
                                        }

                                    </div>

                                    {/* <!-- Cart Title --> */}
                                    <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                        {cart.productName}
                                    </h5>

                                    {/* <!-- Cart Price --> */}
                                    <div className="flex items-center justify-start gap-x-1.5 md:gap-x-2 mt-1.5 md:mt-2.5">
                                        <div className="text-teal-600 dark:text-emerald-500">
                                            <span className="font-DanaBold text-base lg:text-xl">
                                                {Number(cart.price).toLocaleString()}
                                            </span>
                                            <span className="pr-1 text-xs md:text-sm tracking-tighter">
                                                تومان
                                            </span>
                                        </div>
                                        {
                                            cart.discount !== 0 &&
                                            <div className="mr-2 text-xs md:text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                                <span className=''>
                                                    {Number(cart.discount).toLocaleString()}
                                                </span>
                                                <span className="hidden lg:inline">
                                                    تومان
                                                </span>
                                            </div>
                                        }
                                    </div>

                                    {/* <!-- Cart Footer --> */}
                                    <div className="flex items-center justify-between gap-x-1 mt-1.5 md:mt-2.5">

                                        {/* <!-- Star --> */}
                                        <div className="flex text-gray-300 dark:text-gray-400">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <svg key={index} className={`mb-1 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${index < cart.star && "text-yellow-400"}`}>
                                                    <use href="#star"></use>
                                                </svg>
                                            ))}
                                        </div>

                                        {/* <!-- Timer --> */}
                                        {
                                            cart.discount !== 0 &&
                                            <Clock clock={cart.clock} showClock={true} />
                                        }

                                    </div>

                                </Link>
                            })}

                        </div>

                    </div>
                </section>
            </>}
        </>
    )
}

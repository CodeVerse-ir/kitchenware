"use client";

import Image from 'next/image';
import logo from '../../public/utils/image/logo/logo.png';
import SvgFooter from '../svg/SvgFooter';
import Link from 'next/link';

const list = [
    {
        name: 'جدیدترین محصولات',
        path: '/products',
    },
    {
        name: 'محصولات با تخفیف',
        path: '/products/discount',
    },
    {
        name: 'محصولات پر فروش',
        path: '/products/best-selling',
    },
    {
        name: 'مطالب خواندنی',
        path: '/blogs',
    },
    {
        name: 'برند ها',
        path: '/brands',
    },
    {
        name: 'پرسش های متداول',
        path: '/',
    },
]

export default function Footer() {

    const scrollToTop = () => {  
        window.scrollTo({  
            top: 0,  
            behavior: 'smooth' // برای حرکت نرم  
        });  
    }; 

    return (
        <>
            <SvgFooter />

            <footer className="relative min-h-80 px-5 py-10 m:px-10 md:px-5 lg:px-16 text-gray-300 bg-zinc-700">

                {/* <!-- Curve --> */}
                <svg
                    className="absolute top-0 left-0 right-0 hidden md:inline-block mx-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px] rotate-180">
                    <use href="#curve"></use>
                </svg>

                {/* <!-- Arrow Circle --> */}
                <div
                    className="absolute top-0 left-0 right-0 mx-auto -translate-y-2/4 hidden md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full cursor-pointer" onClick={scrollToTop}>
                    <svg className="w-5 h-5 text-zinc-700 dark:text-white rotate-180">
                        <use href="#chevron-down-mini"></use>
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 xl:gap-y-0 pb-10 border-b border-b-gray-100/20">
                    <div className="flex flex-col md:col-span-2 xl:col-span-1 gap-y-6">
                        <Image
                            className="w-56 mb-2.5"
                            src={logo}
                            alt="logo"
                            width={224}
                            height={224}
                            loading="lazy"
                        />

                        <p className="text-base lg:text-lg xl:pl-20">
                            در اینجا، ما در خدمت شما هستیم تا تجربه‌ی آشپزی و پخت و
                            پز شما را به یک سطح جدید برسانیم. با محصولات متنوع و با کیفیت ما، اطمینان حاصل کنید که همیشه برای شما بهترین و
                            مناسب‌ترین لوازم آشپزخانه را داریم.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-white font-DanaBold text-xl lg:text-2xl pb-2">
                            دسترسی سریع
                        </h4>

                        <div
                            className="grid grid-cols-2 mt-6 gap-y-2.5 text-sm lg:text-base xs:pl-20 md:pl-0 lg:pl-20">
                            {list.map((item, index) => {
                                return <div key={index} className='flex items-center justify-start'>
                                    <Link href={item.path}
                                        className='flex items-center justify-start hover:text-orange-300 transition-colors'>
                                        <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                        {item.name}
                                    </Link> 
                                </div>
                            })}
                        </div>

                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-white font-DanaBold text-base lg:text-2xl pb-8">
                            در تماس باشیم
                        </h4>

                        <div className="flex gap-x-2 mb-4 text-sm lg:text-base">
                            <svg className="w-5 h-5">
                                <use href="#map-pin"></use>
                            </svg>
                            شهر قهدریجان ، خیابان امام خمینی ، کوچه بازار ، وسط بازارچه
                        </div>

                        <div className="flex gap-x-2 mb-4 text-sm lg:text-base">
                            <svg className="w-5 h-5">
                                <use href="#phone"></use>
                            </svg>
                            <span>
                                031-37500435
                            </span>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-y-4 xl:gap-y-0 items-center justify-between mt-7 text-sm lg:text-base">
                    <p>
                        تمامی حقوق برای
                        <span className="font-DanaMedium px-1 text-orange-300">
                            فروشگاه لوازم آشپزخانه کبیری
                        </span>
                        محفوظ است. ©
                    </p>
                    <p>
                        طراحی شده توسط
                        <a href="https://codeverse.iapp.ir" className="pr-1 hover:text-orange-300 transition-colors" target="_blank">
                            Code Verse
                        </a>
                    </p>
                </div>

            </footer>
        </>
    )
}

"use client"

import { usePathname } from "next/navigation";
import Image from 'next/image';
import logoImg from '../../public/utils/image/logo/logo-img.png'
import Link from "next/link";
import BtnSwich from "./BtnSwich";
import SvgDesktop from "../svg/SvgDesktop";


const links = [
    {
        name: 'صفحه اصلی',
        path: '/',
    },
    {
        name: 'دسته بندی محصولات',
        path: '/category',
    },
    {
        name: 'برند ها  ',
        path: '/brands',
    },
    {
        name: 'بلاگ',
        path: '/blogs',
    },
    {
        name: 'تماس با ما',
        path: '/contact',
    },
]


export default function NavDesktop({darkMode , handleDarkMode}) {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <>
            <SvgDesktop />

            {/* <!-- Header Desktop --> */}
            <header className="absolute top-9 right-0 left-0 z-10 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
                <div className="flex items-center justify-between w-full ">
                    {/* <!-- Logo & Menu --> */}
                    <nav className="flex items-center gap-x-5 lg:gap-x-9">

                        {/* <!-- Logo --> */}
                        <div className="w-12 h-12 shrink-0">
                            <Image
                                src={logoImg}
                                alt="Kitchenware"
                                width={48}
                                height={48}
                            />
                        </div>

                        <div className="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px] child-hover:text-orange-300 transition-colors">
                            {links.map((link, index) => {
                                return <Link href={link.path}
                                    key={index}
                                    className={`${link.path === pathname && "font-DanaMedium text-orange-300"} hover:text-orange-300 transition-colors`}
                                >{link.name}</Link>
                            })}
                        </div>

                    </nav>

                    {/* <!-- Cart & Toggle & Login Link --> */}
                    <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-10 text-xl text-orange-200">

                        {/* <!-- Search Box --> */}
                        <Link href="/products"
                            className={`${"/products" === pathname && "text-orange-300"} hover:text-orange-300 transition-colors`}
                        >
                            <svg className="w-8 h-8">
                                <use href="#magnifying-glass"></use>
                            </svg>
                        </Link>

                        <BtnSwich darkMode={darkMode} handleDarkMode={handleDarkMode} />

                        {/* <!-- Divide Border --> */}
                        <span className="block w-px h-14 bg-white/20"></span>

                        {/* <!-- Login Link --> */}
                        <a href="" className="flex items-center gap-x-2.5 tracking-tightest">
                            <span>
                                <svg className="w-8 h-8 rotate-180">
                                    <use href="#arrow-left-on-rectangle"></use>
                                </svg>
                            </span>
                            <span className="hidden xl:inline-block">
                                ورود | ثبت نام
                            </span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}




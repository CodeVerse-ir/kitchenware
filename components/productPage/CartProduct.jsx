"use client";

import product1 from '../../public/utils/image/products/product1/product1.jpeg';
import product2 from '../../public/utils/image/products/product1/product2.jpeg';
import product3 from '../../public/utils/image/products/product1/product3.jpeg';
import product4 from '../../public/utils/image/products/product1/product4.jpeg';
import product5 from '../../public/utils/image/products/product1/product5.jpeg';

import Image from 'next/image';
import Clock from '../homePage/Clock';
import SvgCartProduct from '../svg/SvgCartProduct';
import { useEffect, useState } from 'react';
import AlertPictures from './AlertPictures';
import NoScroll from '../ui/NoScroll';
import AlertComment from './AlertComment';
import AlertSave from '../ui/AlertSave';

const cartProduct = {
    productName: 'سرویس چینی زرین نئوکلاسیک دلسا 6 نفره 29 پارچه',
    price: 59800,
    discountPercent: 8,
    discount: 65000,
    clock: '01:22:10:05',
    path: '/product',
    image: [product1, product2, product3, product4, product5],
    code: '64656',
    brand: 'چینی زرین',
    category: 'سرویس چینی غذاخوری 6 نفره',
    star: "4.5",
    like: "98000",
    bootmark: "1500",
    attributes: [
        [
            'قالب :',
            ' نئوکلاسیک',
        ],
        [
            'طرح :',
            ' فانتزیا',
        ],
        [
            'تعداد پارچه :',
            ' 29',
        ],
        [
            'قابلیت شستشو در ماشین ظرفشویی :',
            ' دارد',
        ],
        [
            'امکان استفاده در مایکروفر :',
            ' ندارد',
        ],
    ],
    colors: [
        [
            'قرمز',
            'ef4444',
        ],
        [
            'سبز',
            '22c55e',
        ],
        [
            'نارنجی',
            'f97316',
        ],
        [
            'قهوه ای',
            '9a3412',
        ],
    ]
}


export default function CartProduct() {

    const [star, setStar] = useState(cartProduct.star);
    const [like, setLike] = useState(false);
    const [bootmark, setBootmark] = useState(false);
    const [showPicture, setShowPicture] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [saveComment, setSaveComment] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleStar = () => setLike(!like);
    const handleBootmark = () => setBootmark(!bootmark);
    const handleShowPicture = () => setShowPicture(!showPicture);
    const handleShowComment = () => {
        if (!saveComment) {
            setShowComment(!showComment)
        }
    };
    const closeAlert = () => { setShowPicture(false) || setShowComment(false) }
    const handleSaveComment = () => {
        handleShowComment();
        setSaveComment(true);
        setShowAlert(true);
    }


    return (
        <>
            <SvgCartProduct />

            {/* <!-- Cart Body --> */}
            <div className="flex flex-col lg:flex-row w-full p-5 md:p-10 shadow-normal rounded-2xl bg-white dark:bg-zinc-700">

                {/* <!-- Right Image Save  --> */}
                <div className="flex flex-col gap-y-10 mb-10 md:mb-0">

                    {/* <!-- Proposal --> */}
                    {
                        cartProduct.discount !== 0 &&
                        <div
                            className="flex items-center justify-between px-5 py-3 text-sm md:text-base lg:text-lg text-orange-400 dark:text-orange-600 bg-orange-200/60 dark:bg-orange-300 rounded-xl">

                            <div className="flex items-center justify-between gap-x-1.5">
                                <svg className="w-5 h-5">
                                    <use href="#clock"></use>
                                </svg>
                                <span>
                                    پیشنهاد ویژه
                                </span>
                            </div>

                            <Clock clock={cartProduct.clock} showClock={false} />

                        </div>
                    }

                    {/* <!-- Picture --> */}
                    <div className="flex items-start justify-center gap-x-2">
                        <div className="flex flex-col gap-y-2">
                            {/* <!-- Star --> */}
                            <div
                                className={`group flex items-center justify-center w-12 h-12 rounded-xl ${saveComment ? "text-red-500" : "text-orange-300"} border border-gray-300`} onClick={handleShowComment}>
                                <svg className="w-5 h-5 group-hover:scale-125 transition-all">
                                    <use href="#star-solid"></use>
                                </svg>
                            </div>
                            <div
                                className={`group flex items-center justify-center w-12 h-12 rounded-xl ${like ? "text-red-500" : "text-orange-300"} border border-gray-300`} onClick={handleStar}>
                                <svg className="w-5 h-5 group-hover:scale-125 transition-all">
                                    <use href="#heart-solid"></use>
                                </svg>
                            </div>
                            <div
                                className={`group flex items-center justify-center w-12 h-12 rounded-xl ${bootmark ? "text-red-500" : "text-orange-300"} border border-gray-300`} onClick={handleBootmark}>
                                <svg className="w-5 h-5 group-hover:scale-125 transition-all">
                                    <use href="#bookmark-solid"></use>
                                </svg>
                            </div>
                        </div>
                        <Image
                            className="max-w-72 max-h-72 rounded-xl"
                            src={cartProduct.image[0]}
                            alt="product"
                            sizes="(min-width: 768px)"
                            loading="lazy"
                        />
                    </div>

                    {/* <!-- Pictures --> */}
                    <div className="flex items-center justify-center gap-x-2">

                        <div className="flex items-center justify-center gap-x-2 text-gray-300 dark:text-gray-400">
                            {Array.from({ length: 4 }, (_, index) => (
                                <div key={index} className="group relative flex items-center justify-center w-20 h-20 p-1 rounded-xl border border-gray-300 cursor-pointer" href="" onClick={handleShowPicture}>
                                    <Image
                                        className={`w-16 h-16 ${index === 3 && "blur-sm"}`}
                                        src={cartProduct.image[index + 1]}
                                        alt="product"
                                        sizes="(min-width: 768px)"
                                        loading="lazy"
                                    />
                                    {index === 3 &&
                                        <div
                                            className="absolute child:inset-0 mx-auto flex gap-x-1 child:w-2 child:h-2 child:rounded-full child:border-2 child:border-gray-700 group-hover:gap-x-2 group-hover:child:bg-gray-700 child:transition-all transition-all">
                                            <div className="">
                                            </div>
                                            <div className="">
                                            </div>
                                            <div className="">
                                            </div>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div >

                {/* <!-- Left Description Discount Star --> */}
                < div className="w-full md:mt-10 lg:mt-0 lg:pl-6 lg:pr-16" >

                    {/* <!-- Left Header --> */}
                    <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between" >

                        <div className="space-y-5">

                            <div
                                className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-start gap-x-6 text-sm md:text-base lg:text-lg">
                                <div className="flex gap-x-2">
                                    <span className="text-gray-700 dark:text-gray-300">
                                        برند:
                                    </span>
                                    <a className="text-orange-300" href="">
                                        {cartProduct.brand}
                                    </a>
                                </div>
                                <div className="flex gap-x-2">
                                    <span className="text-gray-700 dark:text-gray-300">
                                        دسته بندی:
                                    </span>
                                    <a className="text-orange-300 line-clamp-1" href="">
                                        {cartProduct.category}
                                    </a>
                                </div>
                            </div>

                            <h4 className="font-MorabbaMedium text-lg md:text-xl lg:text-2xl text-black dark:text-white line-clamp-2">
                                {cartProduct.productName}
                            </h4>

                        </div>

                        <div
                            className="flex gap-x-2 text-gray-700 dark:text-gray-300 order-first xl:order-none text-sm md:text-base lg:text-lg">
                            <span>
                                شناسه کالا:
                            </span>
                            <span>
                                {cartProduct.code}
                            </span>
                        </div>

                    </div>

                    {/* <!-- Line --> */}
                    <div className="w-full h-px my-5 bg-gray-300"></div>

                    {/* <!-- Left Body --> */}
                    < div className="flex flex-col xl:flex-row items-start justify-between" >

                        {/* <!-- Right Description --> */}
                        <div className="text-black dark:text-white" >
                            <h4 className="font-DanaBold mb-4 text-base md:text-lg lg:text-xl">
                                مشخصات
                            </h4>

                            <div className="flex flex-col gap-y-2.5 gap-x-2.5 text-sm md:text-base lg:text-lg">
                                {cartProduct.attributes.map((property, index) => {
                                    return <span key={index}>
                                        {property}
                                    </span>
                                })}
                                <div className="flex flex-col">
                                    <span className="mb-1">
                                        رنگ :
                                    </span>
                                    <div
                                        className="flex items-center justify-center gap-x-1 gap-y-1 text-xs md:text-sm lg:text-base flex-wrap">
                                        {cartProduct.colors.map((color, index) => {
                                            return <div key={index}
                                                className="flex items-center justify-center w-25 h-15 gap-x-2 py-1 px-1.5 rounded-xl border border-gray-300">
                                                <span className="w-4 h-4 rounded" style={{ backgroundColor: `#${color[1]}` }} ></span>
                                                {color[0]}
                                            </div>
                                        })}
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* <!-- Left Discount Star --> */}
                        <div className="w-full xl:w-auto flex flex-col md:flex-row xl:flex-col md:items-start md:justify-between" >

                            <div className="mt-10 xl:mt-0 flex flex-col items-start justify-center text-black dark:text-white">

                                <h4 className="mb-4 font-DanaBold text-base md:text-lg lg:text-xl">
                                    قیمت
                                </h4>


                                <div className="space-y-2.5 text-sm md:text-base lg:text-lg">

                                    <div className="flex items-center justify-start gap-x-2 py-1 px-2.5 rounded-xl border border-gray-300">
                                        <span>تخفیف :</span>
                                        <div className="text-gray-500 dark:text-gray-300 line-through decoration-red-400 decoration-[1.5px]">
                                            {cartProduct.discount}
                                            <span className="pr-1">تومان</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start gap-x-2 py-1 px-2.5 rounded-xl border border-gray-300">
                                        <span>قیمت :</span>
                                        <div className="font-DanaBold">
                                            {cartProduct.price}
                                            <span className="font-Dana pr-1">تومان</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="mt-10 xl:mt-16 flex flex-col items-start justify-center">

                                <h4 className="font-DanaBold mb-4 text-base md:text-lg lg:text-xl text-black dark:text-white">
                                    امتیازات
                                </h4>

                                <div className="space-y-2.5 text-sm md:text-base lg:text-lg">

                                    <div
                                        className="flex items-center justify-between w-24 md:w-30 lg:w-36 gap-x-2 py-1 px-4 rounded-xl border border-gray-300">

                                        {/* <!-- Star --> */}
                                        <div className="flex text-gray-300 dark:text-gray-400">
                                            <svg className="mb-1 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400">
                                                <use href="#star"></use>
                                            </svg>
                                        </div>

                                        <span className="pt-1 text-gray-700 dark:text-white">
                                            {cartProduct.star}
                                        </span>

                                    </div>


                                    <div
                                        className="flex items-center justify-between w-24 md:w-30 lg:w-36 gap-x-2 py-1 px-4 rounded-xl border border-gray-300">

                                        {/* <!-- heart --> */}
                                        <div className="flex text-red-500">
                                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                                <use href="#heart"></use>
                                            </svg>
                                        </div>

                                        <div className="flex pt-1 gap-x-1.5 text-gray-700 dark:text-white" style={{ direction: 'ltr' }}>
                                            {cartProduct.like > 1000 ? `${(cartProduct.like / 1000).toFixed(1).replace(/\.0$/, '')} k` : cartProduct.like}
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center justify-between w-24 md:w-30 lg:w-36 gap-x-2 py-1 px-4 rounded-xl border border-gray-300">

                                        {/* <!-- bookmark --> */}
                                        <div className="flex text-green-900 dark:text-green-700">
                                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                                <use href="#bookmark"></use>
                                            </svg>
                                        </div>

                                        <div className="flex pt-1 gap-x-1.5 text-gray-700 dark:text-white" style={{ direction: 'ltr' }}>
                                            {cartProduct.bootmark > 1000 ? `${(cartProduct.bootmark / 1000).toFixed(1).replace(/\.0$/, '')} k` : cartProduct.bootmark}
                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <AlertPictures showPicture={showPicture} handleShowPicture={handleShowPicture} />
            <NoScroll noScroll={showPicture} />

            <AlertComment showComment={showComment} handleShowComment={handleShowComment} handleSaveComment={handleSaveComment} />
            <NoScroll noScroll={showComment} />

            <AlertSave textAlert="نظر ثبت شد !" showAlert={showAlert} setShowAlert={setShowAlert} />

            <div className={`${showPicture || showComment ? "visible opacity-100" : "invisible opacity-0"} overlay-alert`} onClick={closeAlert}></div>
        </>
    )
}

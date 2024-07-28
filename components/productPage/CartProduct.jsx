"use client";

import Image from 'next/image';
import Clock from '../homePage/Clock';
import SvgCartProduct from '../svg/SvgCartProduct';
import { useEffect, useState } from 'react';
import AlertPictures from './AlertPictures';
import NoScroll from '../ui/NoScroll';
import AlertComment from './AlertComment';
import AlertSave from '../ui/AlertSave';
import GetData from '../../axios/GetData';
import Link from 'next/link';


export default function CartProduct({ productName }) {

    // const [star, setStar] = useState(product.star);
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

    const [product, setProduct] = useState(null);

    return (
        <>
            <GetData setData={setProduct} path={`products?code=${productName}`} />

            {/* Loader */}
            {!product && <div>در حال بارگذاری داده‌ها...</div>}

            {product && <>
                <SvgCartProduct />

                {/* <!-- Cart Body --> */}
                <div className="flex flex-col lg:flex-row w-full p-5 md:p-10 shadow-normal rounded-2xl bg-white dark:bg-zinc-700">

                    {/* <!-- Right Image Save  --> */}
                    <div className="flex flex-col gap-y-10 mb-10 md:mb-0">

                        {/* <!-- Proposal --> */}
                        {
                            product[0].discount !== 0 &&
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

                                <Clock clock={product[0].clock} showClock={false} />

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
                                className="md:w-72 md:h-72 rounded-xl object-cover"
                                src={product[0].image[0]}
                                alt="product"
                                width={240}
                                height={240}
                                loading="lazy"
                            />
                        </div>

                        {/* <!-- Pictures --> */}
                        <div className="flex items-center justify-center gap-x-2">

                            <div className="flex items-center justify-center gap-x-2 text-gray-300 dark:text-gray-400">
                                {Array.from({ length: 4 }, (_, index) => (
                                    <div key={index} className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-1 rounded-xl border border-gray-300 cursor-pointer" href="" onClick={handleShowPicture}>
                                        <Image
                                            className={`w-12 h-12 md:w-16 md:h-16 object-cover ${index === 3 && "blur-sm"}`}
                                            src={product[0].image[index + 1]}
                                            alt="product"
                                            width={64}
                                            height={64}
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
                                        <Link className="text-orange-300" href={`/products/brand/${product[0].brand}`}>
                                            {product[0].brand}
                                        </Link>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <span className="text-gray-700 dark:text-gray-300">
                                            دسته بندی:
                                        </span>
                                        <Link className="text-orange-300 line-clamp-1" href={`/products/category/${product[0].category}`}>
                                            {product[0].category}
                                        </Link>
                                    </div>
                                </div>

                                <h4 className="font-MorabbaMedium text-lg md:text-xl lg:text-2xl text-black dark:text-white line-clamp-2">
                                    {product[0].productName}
                                </h4>

                            </div>

                            <div
                                className="flex gap-x-2 text-gray-700 dark:text-gray-300 order-first xl:order-none text-sm md:text-base lg:text-lg">
                                <span>
                                    شناسه کالا:
                                </span>
                                <span>
                                    {product[0].code}
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
                                    {product[0].attributes.map((property, index) => {
                                        return <span key={index}>
                                            {property}
                                        </span>
                                    })}
                                    {product[0].colors &&
                                        <div className="flex flex-col">
                                            <span className="mb-1">
                                                رنگ :
                                            </span>
                                            <div
                                                className="flex items-center justify-center gap-x-1 gap-y-1 text-xs md:text-sm lg:text-base flex-wrap">
                                                {product[0].colors.map((color, index) => {
                                                    return <div key={index}
                                                        className="flex items-center justify-center w-25 h-15 gap-x-2 py-1 px-1.5 rounded-xl border border-gray-300">
                                                        <span className="w-4 h-4 rounded" style={{ backgroundColor: `#${color[1]}` }} ></span>
                                                        {color[0]}
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    }
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
                                                {Number(product[0].discount).toLocaleString()}
                                                <span className="pr-1">تومان</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start gap-x-2 py-1 px-2.5 rounded-xl border border-gray-300">
                                            <span>قیمت :</span>
                                            <div className="font-DanaBold">
                                                {Number(product[0].price).toLocaleString()}
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
                                                {product[0].star}
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
                                                {product[0].like > 1000 ? `${(product[0].like / 1000).toFixed(1).replace(/\.0$/, '')} k` : product[0].like}
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
                                                {product[0].bootmark > 1000 ? `${(product[0].bootmark / 1000).toFixed(1).replace(/\.0$/, '')} k` : product[0].bootmark}
                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <AlertPictures showPicture={showPicture} handleShowPicture={handleShowPicture} productName={productName} />
                <NoScroll noScroll={showPicture} />

                <AlertComment showComment={showComment} handleShowComment={handleShowComment} handleSaveComment={handleSaveComment} />
                <NoScroll noScroll={showComment} />

                <AlertSave textAlert="نظر شما ثبت شد !" showAlert={showAlert} setShowAlert={setShowAlert} />

                <div className={`${showPicture || showComment ? "visible opacity-100" : "invisible opacity-0"} overlay-alert`} onClick={closeAlert}></div>
            </>}
        </>
    )
}

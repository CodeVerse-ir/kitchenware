import avatar from '../../public/utils/image/comment/avatar.png';

import Image from 'next/image';
import SvgComments from '../svg/SvgComments';
import { useState } from 'react';

const initialComments = [
    {
        name: 'منصوره بادله',
        date: {
            day: '6',
            mounth: 'تیر',
            year: '1403',
        },
        title: 'ارسال محصول',
        text: 'خیلی زیبا وبا کیفیت ولی خیلی دیر به دستم رسید',
        star: 1,
        like: 12,
        dislike: 2,
        isLiked: false,
        isDisliked: false,
        image: avatar,
    },
    {
        name: 'مژده اکبری',
        date: {
            day: '13',
            mounth: 'خرداد',
            year: '1403',
        },
        title: 'قدردانی و تشکر',
        text: 'این ظرف شیشه ای خیلی کاربردیه. برای مربا ، ترشی ، ماست و حتی برای دسر های تک‌نفره مناسبه و دردار بودنش مزیت خوبی هستش. جنس خیلی خوبی داره. با قیمت مناسب. از فروشگاه لفتیکا بابت بسته بندی عالی و ارسال سریع تشکر می‌کنم. ',
        star: 5,
        like: 16,
        dislike: 0,
        isLiked: false,
        isDisliked: false,
        image: avatar,
    },
    {
        name: 'بهناز فرج پور',
        date: {
            day: '26',
            mounth: 'بهمن',
            year: '1402',
        },
        title: 'قیمت محصول',
        text: 'هم خوشرنگه هم باکیفیت هم از بیرون ارزون تره.. بسته بندی ام خیلی عالی بود.. فقط پشیمونم که تعداد بیشتری نگرفتم. ',
        star: 4,
        like: 3,
        dislike: 5,
        isLiked: false,
        isDisliked: false,
        image: avatar,
    },
    {
        name: 'احسان پارسا ',
        date: {
            day: '16',
            mounth: 'شهریور',
            year: '1402',
        },
        title: 'رنگ محصول',
        text: 'رنگ سبزش خیلی قشنگه جنس هم عالی ',
        star: 3,
        like: 26,
        dislike: 19,
        isLiked: false,
        isDisliked: false,
        image: avatar,
    },
]


export default function Comments({ showComment }) {

    const [comments, setComments] = useState(initialComments);

    const toggleLike = (index) => {
        setComments(prevComments => {
            const newComments = [...prevComments]; // کپی از نظرات فعلی  

            const comment = { ...newComments[index] }; // کپی از نظر فعلی  

            if (comment.isLiked) {
                comment.like -= 1;
                comment.isLiked = false; // اینجا باید false باشد  
            } else {
                comment.like += 1;
                comment.isLiked = true; // اینجا باید true باشد  
            }

            newComments[index] = comment; // بروزرسانی نظر خاص در لیست جدید 

            return newComments; // برگرداندن لیست جدید  
        });
    };


    const toggleDislike = (index) => {
        setComments(prevComments => {
            const newComments = [...prevComments]; // کپی از نظرات فعلی  

            const comment = { ...newComments[index] }; // کپی از نظر فعلی  

            if (comment.isDisliked) {
                comment.dislike -= 1;
                comment.isDisliked = false; // اینجا باید false باشد  
            } else {
                comment.dislike += 1;
                comment.isDisliked = true; // اینجا باید true باشد  
            }

            newComments[index] = comment; // بروزرسانی نظر خاص در لیست جدید 

            return newComments; // برگرداندن لیست جدید  
        });
    };

    return (
        <>
            <SvgComments />

            {/* <!-- Comments flex --> */}
            <div
                className={`${showComment ? "flex" : "hidden"} flex-col w-full divide-y-[1px] divide-gray-300 mt-2.5 p-5 md:p-10 gap-y-4 lg:gap-y-6 text-sm md:text-base lg:text-lg text-black dark:text-white bg-white dark:bg-zinc-700 shadow-normal rounded-2xl`}>

                {/* <!-- User --> */}
                {comments.map((comment, index) => {
                    return <div key={index}>
                        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 items-start justify-start mt-4 lg:mt-6 gap-x-20" >
                            {/* <!-- Information --> */}
                            <div className="flex items-start justify-normal w-full lg:w-[20%]" >
                                {/* <!-- User Image --> */}
                                < Image
                                    className="w-10 h-10 lg:w-14 lg:h-14"
                                    src={comment.image}
                                    alt={`avatar ${index + 1}`}
                                    sizes="(min-width: 768px)"
                                    loading="lazy"
                                />

                                <div className="flex flex-col items-start justify-center mr-5 gap-y-2.5">
                                    {/* <!-- Name --> */}
                                    <h4 className="font-MorabbaMedium text-base  md:text-lg lg:text-xl">
                                        {comment.name}
                                    </h4>
                                    {/* <!-- Date --> */}
                                    <div
                                        className="flex gap-x-2 font-MorabbaMedium text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-300">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5">
                                            <use href="#calendar-days"></use>
                                        </svg>
                                        <div className='flex items-center justify-center gap-x-1'>
                                            <span>{comment.date.day}</span>
                                            <span>{comment.date.mounth}</span>
                                            <span>{comment.date.year}</span>
                                        </div>
                                    </div>

                                    {/* <!-- Star --> */}
                                    <div className="flex text-gray-300 dark:text-gray-400">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <svg key={index} className={`mb-1 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${index < comment.star && "text-yellow-400"}`}>
                                                <use href="#star-solid"></use>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Comment --> */}
                            <div className="flex flex-col items-start justify-center w-[80%] gap-y-2 lg:gap-y-4">
                                {/* <!-- Title --> */}
                                <h4 className="font-DanaMedium text-sm md:text-base lg:text-lg">
                                    {comment.title}
                                </h4>
                                {/* <!-- Text --> */}
                                <p className="text-sm md:text-base lg:text-lg">
                                    {comment.text}
                                </p>
                                {/* <!-- Like & Dislike --> */}
                                <div className="flex gap-x-2">
                                    <div
                                        className="group flex items-center justify-center w-16 h-8 lg:w-20 lg:h-10 gap-x-2 rounded-xl border border-gray-300 child:transition-all select-none" onClick={() => toggleLike(index)}>
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 group-hover:scale-125">
                                            <use href={`#${comment.isLiked ? "hand-up-solid" : "hand-up"}`}></use>
                                        </svg>
                                        <span className="mt-1">
                                            {comment.like}
                                        </span>
                                    </div>
                                    <div
                                        className="group flex items-center justify-center w-16 h-8 lg:w-20 lg:h-10 gap-x-2 rounded-xl border border-gray-300 child:transition-all select-none" onClick={() => toggleDislike(index)}>
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-red-500 group-hover:scale-125">
                                            <use href={`#${comment.isDisliked ? "hand-down-solid" : "hand-down"}`}></use>
                                        </svg>
                                        <span className="mt-1">
                                            {comment.dislike}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                })}

            </div>
        </>
    )
}

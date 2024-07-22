"use client";

import spoon from '../../../public/utils/image/blogs/spoon.jpeg';
import Image from 'next/image';

import { useEffect, useState } from 'react';  
import Loader from '../../../components/ui/Loader';

const cartBlog = {
    name: 'راهنمای خرید قاشق و چنگال برای لوازم آشپزخانه',
    date: {
        day: '01',
        mounth: 'تیر',
        year: '1403',
    },
    image: spoon,
    text: [
        {
            title: 'بهترین قاشق و چنگال',
            body: [
                {
                    "paragraph": "امروزه زندگی بشر به گونه‌ای شده است که تا نام از یک وسیله‌ای برده می‌شود (لوازم خانگی، پوشاک، ماشین و…) سریعاً این سوال پرسیده می‌شود که معتبرترین و یا بهترین برند یا مارک کدام است و… ، بدون تردید، قاشق و چنگال نیز به عنوان 2 مورد از ضروری‌ترین لوازم آشپزخانه مستثنی(مستثنا) از این قضیه نیستند."
                },
                {
                    "paragraph": "هر زمان که در خصوص بهترین مدل یا بهترین نوع قاشق و چنگال سخنی به میان می‌آید، فارغ از سوالات متعددی که وجود دارد، عمدتاً 2 سوال نسبت به سایر سوالات بیشتر پرسیده می‌شود که در ادامه در خصوص این 2 سوالات توضیحات مختصری را بیان خواهیم نمود."
                }
            ]
        },
        {
            title: 'سوال اول : معتبرترین مارک قاشق و چنگال چیست؟',
            body: [
                {
                    "paragraph": "ما به هیچ وجه در اینجا قصد تبلیغ برای برند یا مارک خاصی از قاشق و چنگال نداریم، از این رو تمامی اسامی و برندهایی که نام برده می‌شوند، صرفاً جهت آشنایی شما عزیزان می‌باشد و هومیسکوم به هیچ وجه برند مشخصی را معرفی نمی‌کند.اما واقعیت این است که قاشق و چنگال استیل همواره یکی از مدل‌هایی است که طرفداران خاص خود را دارد و از این رو همواره جزء یکی از پرطرفدارترین انواع قاشق و چنگال‌های موجود در بازار است."
                },
            ]
        },
        {
            title: 'سوال دوم : قاشق و چنگال مات خوب است یا براق؟',
            body: [
                {
                    "paragraph": "در پاسخ به چنین سوالی باید بگوییم واقعیت این است که با توجه به اینکه قاشق و چنگال‌های تولید شده توسط کمپانی‌های معتبر تماماً از استیل ساخته می‌شوند، از نظر کیفیت، هیچ تفاوتی بین قاشق و چنگال مات و براق وجودندارد و تنها از نظر جنبه‌های ظاهری دارای تفاوت‌هایی هستند که این در ادامه اشاره‌ای کوتاه به برخی موارد خواهیم داشت."
                },
                {
                    "paragraph": "اما یک واقعیت در خصوص نوع مات یا براقِ قاشق و چنگال وجود دارد و آن هم اینکه، انتخاب هر یک کاملاً به سلیقه خریدار بستگی دارد. به بیانی ساده، اینکه شما بخواهید قاشق و چنگال مات بخرید یا براق، کاملاً به سلیقه شما بستگی دارد."
                },
            ]
        },
    ]

};

export default function page({ params }) {
    const { blogName } = params

    const [loading, setLoading] = useState(true);  

    useEffect(() => {  

        // فرض کنید داده‌ای از یک API می‌گیرید  
        const fetchData = async () => {  
            try {  
                // به‌جای این مورد، داده‌های واقعی خود را بارگذاری کنید  
                await new Promise(resolve => setTimeout(resolve, 5000)); // برای شبیه‌سازی بارگذاری  
            } catch (error) {  
                console.error('Error fetching data:', error);  
            } finally {  
                setLoading(false);  
            }  
        };  

        fetchData();  
    }, []);  

    if (loading) {  
        return <Loader />;  
    }

    return (
        <>
            <main className="background">

                <section className="blog py-8 md:pt-40 md:pb-10 lg:pt-44 lg:pb-14">
                    <div className="container">

                        {/* <!-- Section Head --> */}
                        <div className="flex items-end justify-between mb-5 md:mb-12">
                            <h2 className="section-title">
                                بلاگ
                            </h2>
                        </div>

                        <div className="flex flex-col w-full p-5 md:p-10 shadow-normal rounded-2xl text-black dark:text-white bg-white dark:bg-zinc-700">
                            {/* <!-- Title --> */}
                            <h4 className="flex items-center justify-center font-MorabbaBold text-lg md:text-xl lg:text-2xl" >
                                {cartBlog.name}
                            </h4>
                            {/* <!-- Date --> */}
                            <div className="flex items-center justify-center gap-x-2 text-xs md:text-sm lg:text-base my-4">
                                <div>
                                    تاریخ انتشار :
                                </div>
                                <div className='flex items-center justify-center gap-x-2'>
                                    <span>
                                        {cartBlog.date.day}
                                    </span>
                                    <span>
                                        {cartBlog.date.mounth}
                                    </span>
                                    <span>
                                        {cartBlog.date.year}
                                    </span>
                                </div>
                            </div>
                            {/* <!-- Image --> */}
                            <Image
                                className="w-[80%] mx-auto rounded-md mb-10"
                                src={cartBlog.image}
                                alt="blog" 
                                sizes="(min-width: 768px)"
                                loading="lazy"
                            />
                            {/* <!-- Text --> */}
                            <div className="">
                                {cartBlog.text.map((text, index) => {
                                    return <div key={index}>
                                        <h4 className="font-DanaMedium text-lg md:text-xl lg:text-2xl mb-4">
                                            {text.title}
                                        </h4>
                                        {text.body.map((body, index) => {
                                            return <p key={index} className="text-sm md:text-base lg:text-xl mb-8">
                                                {body.paragraph}
                                            </p>
                                        })}
                                    </div>
                                })}
                            </div>
                        </div>

                    </div>

                </section>

            </main >
        </>
    )
}

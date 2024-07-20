import Image from 'next/image';
import calendar from '../../public/utils/image/svgs/services/calendar.png';
import hourglass from '../../public/utils/image/svgs/services/hourglass.png';
import discount from '../../public/utils/image/svgs/services/discount.png';
import certificate from '../../public/utils/image/svgs/services/certificate.png';

const servises = [
    {
        image: calendar,
        text: 'روز های کاری فروشگاه',
        subText: 'از شنبه تا پنجشنبه',
    },
    {
        image: hourglass,
        text: 'ساعت کاری فروشگاه',
        subText: 'صبح از ساعت 8 تا 13 و بعد از ظهر 16 تا 21',
    },
    {
        image: discount,
        text: 'ارزان بخرید',
        subText: 'قیمت ها را مقایسه کنید',
    },
    {
        image: certificate,
        text: 'با کیفیت بخرید',
        subText: 'بهترین محصولات از شرکت های مشهور',
    },
]

export default function SectionServices() {
    return (
        <>
            <section className="services mb-8 md:mb-20">
                <div className="container">

                    {/* <!-- support & delivery --> */}
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center text-zinc-700 dark:text-white gap-y-11 md:gap-x-4 lg:gap-x-5 mb-14 md:mb-36">

                        {servises.map((servise, index) => {
                            {/* <!-- support --> */ }
                            return <div key={index} className="flex flex-col items-center justify-center gap-3 max-w-fit md:flex-row">
                                <Image
                                    className="w-14 h-14 md:w-16 md:h-16"
                                    src={servise.image}
                                    alt={`servise ${index + 1}`}
                                    width={56}
                                    height={56}
                                    loading="lazy"
                                />

                                {/* <!-- text --> */}
                                <div className="flex flex-col items-start justify-between md:max-h-14">
                                    <p className="text-sm font-DanaBold lg:text-lg text-nowrap">
                                        {servise.text}
                                    </p>
                                    <span className="text-xs lg:text-sm">
                                        {servise.subText}
                                    </span>
                                </div>
                            </div>

                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

import SvgBlogsPage from "../../components/svg/SvgBlogsPage";

export default function Contact() {
    return (
        <>
            <SvgBlogsPage />

            <main className="background">

                <section className="blog py-8 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
                    <div className="container">

                        {/* <!-- Section Head --> */}
                        <div className="flex items-center justify-between mb-5 md:mb-12">

                            <h2 className="section-title">
                                تماس با ما
                            </h2>

                        </div>


                        <div
                            className="flex flex-col lg:flex-row items-center justify-between w-full p-5 xl:p-5 text-sm md:text-base lg:text-lg dark:bg-zinc-700 bg-white text-zinc-700 dark:text-white rounded-2xl shadow-normal">

                            {/* <!-- contact --> */}
                            <div className="space-y-5 lg:space-y-10">
                                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-y-2 lg:gap-y-0 gap-x-2">
                                    <div className="flex items-center justify-start gap-x-1 xl:gap-x-2">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                            <use href="#clock"></use>
                                        </svg>
                                        <span>
                                            ساعات کاری :
                                        </span>
                                    </div>
                                    <span>
                                        از شنبه تا پنجشنبه، صبح از ساعت 8 تا 13 و بعد از ظهر از ساعت 16 تا 21
                                    </span>
                                </div>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-y-2 lg:gap-y-0 gap-x-2">
                                    <div className="flex items-center justify-start gap-x-1 xl:gap-x-2">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                            <use href="#map-pin"></use>
                                        </svg>
                                        <span>
                                            آدرس :
                                        </span>
                                    </div>
                                    <span>
                                        شهر قهدریجان ، خیابان امام خمینی ، کوچه بازار ، وسط بازارچه
                                    </span>
                                </div>
                                <div className="flex items-center justify-start gap-x-1 xl:gap-x-2">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#phone"></use>
                                    </svg>
                                    <span>
                                        شماره تلفن :
                                    </span>
                                    <span>
                                        03137500435
                                    </span>
                                </div>

                            </div>

                            {/* <!-- Google Map --> */}
                            <iframe className="w-80 h-80 mt-5 lg:mt-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.0689316168755!2d51.45642605988455!3d32.57768567385678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc2da79ebe622b%3A0xf80e67ca564e8e09!2z2LjYsdmI2YEg2KLYtNm-2LLYrtin2YbZhyDaqdio24zYsduM!5e0!3m2!1sfa!2s!4v1720784295638!5m2!1sfa!2s"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>

                        </div>
                    </div>

                </section>

            </main>
        </>
    )
}

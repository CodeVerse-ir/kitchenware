import Image from "next/image";
import Link from "next/link";

import logo from '../../public/utils/image/logo/logo.png';

import blog1 from '../../public/utils/image/blogs/blog-1.jpeg';
import blog2 from '../../public/utils/image/blogs/blog-2.jpeg';
import blog3 from '../../public/utils/image/blogs/blog-3.jpeg';
import blog4 from '../../public/utils/image/blogs/blog-4.jpeg';
import blog5 from '../../public/utils/image/blogs/blog-5.jpg';
import blog6 from '../../public/utils/image/blogs/blog-6.png';
import SvgSectionBlog from "../../components/svg/SvgSectionBlog";

const cartBlogs = [
  {
    image: blog1,
    title: 'جدید ترین محصولات چینی زرین',
    text: 'در این مقاله به معرفی جدیدترین و پرفروش ترین محصولات چینی زرین پرداخته و سعی می کنیم تا حد امکان به ویژگی های این محصولات بپردازیم.شما میتوانید محصول مورد نظر خود را در سایت لفتیکا سفارش دهید.',
    day: '21',
    mounth: 'مرداد',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog2,
    title: 'سرویس چینی رنگی',
    text: ' سرویس چینی رنگیخانم‌های خانه دار اغلب برای خرید چینی وسواس و سلیقه زیادی به خرج می‌دهند به همین دلیل سرویس چینی یکی عناصر مهم هر آشپزخانه‌ای است',
    day: '23',
    mounth: 'تیر',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog3,
    title: 'راهنمای خرید ظروف آرکوپال',
    text: 'راهنمای خرید ظروف آرکوپالامروزه هر چه جلو تر میرویم طراحان و تولید کنندگان ظرف و ظروف برای مصرف کنن ها و مشتریان خود از اجناس جدید تر و طرح ها',
    day: '05',
    mounth: 'فروردین',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog4,
    title: 'خرید لوازم آشپزخانه',
    text: 'در این مقاله، به بررسی اهمیت و نکات مهم در خرید لوازم آشپزخانه پرداخته و راهنمایی‌هایی برای انتخاب بهترین لوازم آشپزخانه را ارائه خواهیم کرد.',
    day: '12',
    mounth: 'اردیبهشت',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog5,
    title: 'موضوع متن',
    text: 'بدنه متن',
    day: '14',
    mounth: 'آذر',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog6,
    title: 'موضوع متن',
    text: 'بدنه متن',
    day: '02',
    mounth: 'آبان',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog4,
    title: 'موضوع متن',
    text: 'بدنه متن',
    day: '02',
    mounth: 'آبان',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog4,
    title: 'موضوع متن',
    text: 'بدنه متن',
    day: '02',
    mounth: 'آبان',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog4,
    title: 'موضوع متن',
    text: 'بدنه متن',
    day: '02',
    mounth: 'آبان',
    year: '1402',
    path: '/blog/chini',
  },
  {
    image: blog4,
    title: 'موضوع متن',
    text: 'بدنه متن',
    day: '02',
    mounth: 'آبان',
    year: '1402',
    path: '/blog/chini',
  },
]

export default function Blogs() {
  return (
    <>
      <SvgSectionBlog />

      <main className="background">
        <section className="blog py-8 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
          <div className="container">


            {/* <!-- Section Head --> */}
            <div className="flex items-center justify-between mb-5 md:mb-12">

              <h2 className="section-title">
                مطالب خواندنی
              </h2>

            </div>

            {/* <!-- items --> */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cartBlogs.map((blog, index) => {
                return <div key={index}
                  className="flex md:flex-col dark:bg-zinc-700 bg-white p-2.5 justify-center rounded-2xl gap-4 md:justify-between md:items-center"
                >
                  {/* <!-- image --> */}
                  <div className="relative flex items-center group max-w-32 max-h-32 md:max-w-72 md:max-h-48">
                    <Image
                      className="object-cover rounded-2xl rounded-bl-4xl min-w-32 min-h-32 md:max-w-72 md:max-h-48"
                      src={blog.image}
                      alt={`blog ${index + 1}`}
                      width={288}
                      height={288}
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-gradient-to-bl from-sky-950 to-sky-950/80 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                      <div className="flex items-center justify-center px-3 md:px-0">
                        <Image
                          className="w-28 md:w-48 mx-auto"
                          src={logo}
                          alt={`blog ${index + 1}`}
                          width={112}
                          height={112}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- text --> */}
                  <div className="w-full pl-2.5 flex flex-col md:flex-row justify-between">

                    {/* <!-- title --> */}
                    <div className="flex flex-col justify-between text-right md:p-2 md:max-w-48 md:h-36 text-wrap">
                      <h4
                        className="font-dana-Medium line-clamp-2 text-sm/7 md:text-lg/7 text-zinc-700 dark:text-white md:mb-2.5">
                        {blog.title}
                      </h4>
                      <p className="font-Dana line-clamp-3 text-sm text-gray-400">
                        {blog.text}
                      </p>
                    </div>

                    {/* <!-- divide --> */}
                    <span className="w-full my-4 md:my-0 h-px bg-gray-100 dark:bg-white/10 md:w-px md:h-full"></span>

                    {/* <!-- created date --> */}
                    <div className="flex md:flex-col gap-y-5 justify-between">
                      <div
                        className="flex text-teal-600 dark:text-emerald-500 text-xs/4 md:text-base/5 md:flex-col md:items-center md:justify-center">
                        <span className="md:font-dana-Bold md:text-2xl/8">{blog.day}</span>
                        <span>{blog.mounth}</span>
                        <span>{blog.year}</span>
                      </div>
                      <Link href={blog.path}
                        className="flex items-center justify-evenly bg-orange-200/20 text-orange-300 w-[4.4375rem] h-5 rounded-md">
                        <p className="text-sm/4">مطالعه</p>
                        <svg className="w-4 h-4">
                          <use href="#arrow-left"></use>
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              })}
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

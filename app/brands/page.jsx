import brand1 from "../../public/utils/image/brands/b1.png";
import brand2 from "../../public/utils/image/brands/b2.png";
import brand3 from "../../public/utils/image/brands/b3.png";
import brand4 from "../../public/utils/image/brands/b4.png";
import brand5 from "../../public/utils/image/brands/b5.png";
import brand6 from "../../public/utils/image/brands/b6.png";
import brand7 from "../../public/utils/image/brands/b7.png";
import brand8 from "../../public/utils/image/brands/b8.png";
import brand9 from "../../public/utils/image/brands/b9.png";
import brand10 from "../../public/utils/image/brands/b10.png";
import brand11 from "../../public/utils/image/brands/b11.png";
import brand12 from "../../public/utils/image/brands/b12.png";
import brand13 from "../../public/utils/image/brands/b13.png";
import brand14 from "../../public/utils/image/brands/b14.png";
import brand15 from "../../public/utils/image/brands/b15.png";
import brand16 from "../../public/utils/image/brands/b16.png";
import no_brand from "../../public/utils/image/brands/default.png";

import Link from "next/link";
import Image from "next/image";


const brands = [
  {
    name: 'فورته',
    image: brand1,
    path: `/products/${encodeURIComponent('فورته')}`,
  },
  {
    name: 'لاوان',
    image: brand2,
    path: `/products/${encodeURIComponent('لاوان')}`,
  },
  {
    name: 'لیمون',
    image: brand2,
    path: `/products/${encodeURIComponent('لیمون')}`,
  },
  {
    name: 'ام جی اس',
    image: brand3,
    path: `/products/${encodeURIComponent('ام جی اس')}`,
  },
  {
    name: 'براون',
    image: brand4,
    path: `/products/${encodeURIComponent('براون')}`,
  },
  {
    name: 'چینی نور',
    image: brand5,
    path: `/products/${encodeURIComponent('چینی نور')}`,
  },
  {
    name: 'چینی زرین',
    image: brand6,
    path: `/products/${encodeURIComponent('چینی زرین')}`,
  },
  {
    name: 'چینی تقدیس',
    image: brand7,
    path: `/products/${encodeURIComponent('چینی تقدیس')}`,
  },
  {
    name: 'زی',
    image: brand8,
    path: `/products/${encodeURIComponent('زی')}`,
  },
  {
    name: 'آبرون',
    image: brand9,
    path: `/products/${encodeURIComponent('آبرون')}`,
  },
  {
    name: 'لورین',
    image: brand10,
    path: `/products/${encodeURIComponent('لورین')}`,
  },
  {
    name: 'ال جی',
    image: brand11,
    path: `/products/${encodeURIComponent('ال جی')}`,
  },
  {
    name: 'اورال بی',
    image: brand12,
    path: `/products/${encodeURIComponent('اورال بی')}`,
  },
  {
    name: 'دالتون',
    image: brand13,
    path: `/products/${encodeURIComponent('دالتون')}`,

  },
  {
    name: 'سب',
    image: brand14,
    path: `/products/${encodeURIComponent('سب')}`,

  },
  {
    name: 'بلک اند دکر',
    image: brand15,
    path: `/products/${encodeURIComponent('بلک اند دکر')}`,

  },
  {
    name: 'دایموند',
    image: brand16,
    path: `/products/${encodeURIComponent('دایموند')}`,

  },
  {
    name: 'نام برند',
    image: no_brand,
    path: `/products/${encodeURIComponent('نام برند')}`,

  },
  {
    name: 'نام برند',
    image: no_brand,
    path: `/products/${encodeURIComponent('نام برند')}`,

  },
  {
    name: 'نام برند',
    image: no_brand,
    path: `/products/${encodeURIComponent('نام برند')}`,

  },
]

export default function Brands() {
  return (
    <main className="background">

      <section className="brands py-8 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
        <div className="container">

          {/* <!-- Section Head --> */}
          <div className="flex items-center justify-between mb-5 md:mb-12">

            <h2 className="section-title px-5 sm:px-0">
              برند ها
            </h2>

          </div>

          {/* <!-- Section Body  --> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 px-5 sm:px-0 md:gap-5 lg:gap-10">
            {/* <!-- item 1 --> */}
            {brands.map((brand, index) => {
              return <Link key={index} href={brand.path}
                className="flex flex-col justify-between w-[170px] h-[150px] p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl" >

                <Image
                  className="max-w-[90px] mx-auto"
                  src={brand.image}
                  alt={`brand ${index + 1}`}
                  width={90}
                  height={90}
                  sizes="(min-width: 768px)"
                  loading="lazy"
                />  

                {/* <!-- Cart Title --> */}
                <h5
                  className="text-center font-DanaMedium text-sm/7 lg:text-md/7 h-6 text-zinc-700 dark:text-white line-clamp-1">
                  {brand.name}
                </h5>

              </Link>
            })}

          </div>

        </div>

      </section >
    </main>
  )
}

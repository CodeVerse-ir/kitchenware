import Link from "next/link";
import Image from "next/image";

import category1 from '../../public/utils/image/categories/category1.png';
import category2 from '../../public/utils/image/categories/category2.png';
import category3 from '../../public/utils/image/categories/category3.png';
import category4 from '../../public/utils/image/categories/category4.png';
import category5 from '../../public/utils/image/categories/category5.png';

const items = [
    {
        image: category1,
        text: 'کالای سرامیکی و چینی',
        path: '/products/chini',
    },
    {
        image: category2,
        text: 'کالای چوبی',
        path: '/products/chobi',
    },
    {
        image: category3,
        text: 'مکمل خانه و آشپزخانه',
        path: '/products/mokamel',
    },
    {
        image: category4,
        text: 'سرو و نوشیدنی',
        path: '/products/serve',
    },
    {
        image: category5,
        text: 'ابزار آشپزخانه',
        path: '/products/abzar',
    },
]

export default function ProductsCategory() {
    return (
        <>
            <section className="products-category mb-10 md:mb-20">
                <div className="container">

                    {/* <!-- Section Body --> */}
                    <div className="flex flex-wrap items-center gap-6 md:flex-nowrap justify-evenly">

                        {/* <!-- items --> */}
                        {items.map((item, index) => {
                            return <Link key={index}
                                href={item.path}
                                className="max-w-[6.25rem] lg:max-w-[12.5rem] flex flex-col">
                                <Image
                                    className="lg:w-48 lg:h-56"
                                    src={item.image}
                                    alt={`item ${index + 1}`}
                                    width={100}
                                    height={128}
                                ></Image>
                                <sub
                                    className="lg:text-xl/7 font-DanaBold text-sm/5 text-zinc-700 dark:text-white md:mt-2.5 mt-1.5 text-center">
                                    {item.text}
                                </sub>
                            </Link>
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

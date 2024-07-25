import Link from "next/link";
import Image from "next/image";
import GetData from "../../axios/GetData";
import { useState } from "react";

export default function ProductsCategory() {

    const [category, setCategory] = useState(null);

    return (
        <>
            <GetData setData={setCategory} path="items"/>

            {/* Loader */}
            {!category && <div>در حال بارگذاری داده‌ها...</div>}

            {category && <>
                <section className="products-category mb-10 md:mb-20">
                    <div className="container">

                        {/* <!-- Section Body --> */}
                        <div className="flex flex-wrap items-center gap-6 md:flex-nowrap justify-evenly">

                            {/* <!-- items --> */}
                            {category.map((item, index) => {
                                return <Link key={index}
                                    href={`${item.path}/${encodeURIComponent(item.name)}`}
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
            </>}
        </>
    )
}

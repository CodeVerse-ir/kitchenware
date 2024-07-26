export default function handler(req, res) {
    
    const data = {
        "products": [
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 60000,
                "discountPercent": 8,
                "discount": 65900,
                "clock": "01:01:01:05",
                "path": "/product",
                "image": "/utils/image/products/p1.jpg",
                "star": 5,
                "code": 12354,
                "brand": "فورته",
                "category": "سرخ کن"
            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 75000,
                "discountPercent": 12,
                "discount": 85000,
                "clock": "01:20:20:05",
                "path": "/product",
                "image": "/utils/image/products/p2.jpg",
                "star": 2,
                "code": 12354,
                "brand": "چینی زرین",
                "category": "سرخ کن"

            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 12500,
                "discountPercent": 8,
                "discount": 13000,
                "clock": "02:46:50:30",
                "path": "/product",
                "image": "/utils/image/products/p3.jpg",
                "star": 3,
                "code": 12354,
                "brand": "زی",
                "category": "سرخ کن"
            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 45000,
                "discountPercent": 0,
                "discount": 0,
                "clock": "00:00:00:00",
                "path": "/product",
                "image": "/utils/image/products/p4.jpg",
                "star": 4,
                "code": 12354,
                "brand": "زی",
                "category": "کارواش خانگی"
            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 78000,
                "discountPercent": 5,
                "discount": 80000,
                "clock": "00:20:31:00",
                "path": "/product",
                "image": "/utils/image/products/p5.webp",
                "star": 2,
                "code": 12354,
                "brand": "آبرون",
                "category": "کارواش خانگی"
            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 132000,
                "discountPercent": 10,
                "discount": 150000,
                "clock": "00:01:02:07",
                "path": "/product",
                "image": "/utils/image/products/p6.webp",
                "star": 3,
                "code": 12354,
                "brand": "زی",
                "category": "کارواش خانگی"
            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 132000,
                "discountPercent": 10,
                "discount": 150000,
                "clock": "00:01:02:07",
                "path": "/product",
                "image": "/utils/image/products/p6.webp",
                "star": 3,
                "code": 12354,
                "brand": "لاوان",
                "category": "کارواش خانگی"
            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 132000,
                "discountPercent": 10,
                "discount": 150000,
                "clock": "00:01:02:07",
                "path": "/product",
                "image": "/utils/image/products/p6.webp",
                "star": 3,
                "code": 12354,
                "brand": "لیمون",
                "category": "ترازوی آشپزخانه"
            },
            {
                "productName": "کتری و قوری استیل 2 لیتر مدل کلاسیک یونیک کد UN-7264",
                "price": 132000,
                "discountPercent": 10,
                "discount": 150000,
                "clock": "00:01:02:07",
                "path": "/product",
                "image": "/utils/image/products/p6.webp",
                "star": 3,
                "code": 12354,
                "brand": "لیمون",
                "category": "ترازوی آشپزخانه"
            }
        ],
        "items": [
            {
                "image": "/utils/image/categories/category1.png",
                "text": "کالای سرامیکی و چینی",
                "path": "/products/category"
            },
            {
                "image": "/utils/image/categories/category2.png",
                "text": "کالای چوبی",
                "path": "/products/category"
            },
            {
                "image": "/utils/image/categories/category3.png",
                "text": "مکمل خانه و آشپزخانه",
                "path": "/products/category"
            },
            {
                "image": "/utils/image/categories/category4.png",
                "text": "سرو و نوشیدنی",
                "path": "/products/category"
            },
            {
                "image": "/utils/image/categories/category5.png",
                "text": "ابزار آشپزخانه",
                "path": "/products/category"
            }
        ],
        "brands": [
            {
                "name": "فورته",
                "image": "/utils/image/brands/b1.png",
                "path": "/products/brand"
            },
            {
                "name": "لاوان",
                "image": "/utils/image/brands/b2.png",
                "path": "/products/brand"
            },
            {
                "name": "لیمون",
                "image": "/utils/image/brands/b3.png",
                "path": "/products/brand"
            },
            {
                "name": "ام جی اس",
                "image": "/utils/image/brands/b4.png",
                "path": "/products/brand"
            },
            {
                "name": "براون",
                "image": "/utils/image/brands/b5.png",
                "path": "/products/brand"
            },
            {
                "name": "چینی نور",
                "image": "/utils/image/brands/b6.png",
                "path": "/products/brand"
            },
            {
                "name": "چینی زرین",
                "image": "/utils/image/brands/b7.png",
                "path": "/products/brand"
            },
            {
                "name": "چینی تقدیس",
                "image": "/utils/image/brands/b8.png",
                "path": "/products/brand"
            },
            {
                "name": "زی",
                "image": "/utils/image/brands/b9.png",
                "path": "/products/brand"
            },
            {
                "name": "آبرون",
                "image": "/utils/image/brands/b10.png",
                "path": "/products/brand"
            },
            {
                "name": "لورین",
                "image": "/utils/image/brands/b11.png",
                "path": "/products/brand"
            },
            {
                "name": "ال جی",
                "image": "/utils/image/brands/b12.png",
                "path": "/products/brand"
            },
            {
                "name": "اورال بی",
                "image": "/utils/image/brands/b13.png",
                "path": "/products/brand"
            },
            {
                "name": "دالتون",
                "image": "/utils/image/brands/b14.png",
                "path": "/products/brand"
            },
            {
                "name": "سب",
                "image": "/utils/image/brands/b15.png",
                "path": "/products/brand"
            },
            {
                "name": "بلک اند دکر",
                "image": "/utils/image/brands/b16.png",
                "path": "/products/brand"
            }
        ],
        "blogs": [
            {
                "image": "/utils/image/blogs/blog-1.jpeg",
                "title": "جدید ترین محصولات چینی زرین",
                "text": "در این مقاله به معرفی جدیدترین و پرفروش ترین محصولات چینی زرین پرداخته و سعی می کنیم تا حد امکان به ویژگی های این محصولات بپردازیم.شما میتوانید محصول مورد نظر خود را در سایت لفتیکا سفارش دهید.",
                "day": "21",
                "mounth": "مرداد",
                "year": "1402",
                "path": "/blog"
            },
            {
                "image": "/utils/image/blogs/blog-2.jpeg",
                "title": "سرویس چینی رنگی",
                "text": " سرویس چینی رنگیخانم‌های خانه دار اغلب برای خرید چینی وسواس و سلیقه زیادی به خرج می‌دهند به همین دلیل سرویس چینی یکی عناصر مهم هر آشپزخانه‌ای است",
                "day": "23",
                "mounth": "تیر",
                "year": "1402",
                "path": "/blog"
            },
            {
                "image": "/utils/image/blogs/blog-3.jpeg",
                "title": "راهنمای خرید ظروف آرکوپال",
                "text": "راهنمای خرید ظروف آرکوپالامروزه هر چه جلو تر میرویم طراحان و تولید کنندگان ظرف و ظروف برای مصرف کنن ها و مشتریان خود از اجناس جدید تر و طرح ها",
                "day": "05",
                "mounth": "فروردین",
                "year": "1402",
                "path": "/blog"
            },
            {
                "image": "/utils/image/blogs/blog-4.jpeg",
                "title": "خرید لوازم آشپزخانه",
                "text": "در این مقاله، به بررسی اهمیت و نکات مهم در خرید لوازم آشپزخانه پرداخته و راهنمایی‌هایی برای انتخاب بهترین لوازم آشپزخانه را ارائه خواهیم کرد.",
                "day": "12",
                "mounth": "اردیبهشت",
                "year": "1402",
                "path": "/blog"
            }
        ]
    };

    res.status(200).json(data);
}
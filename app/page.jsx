"use client"

import { useState, useEffect } from 'react'
import SectionHome from '../components/homePage/SectionHome';
import SectionProducts from '../components/homePage/SectionProducts';
import CategoryBanner from '../components/homePage/CategoryBanner';
import ProductsCategory from '../components/homePage/ProductsCategory';
import BestSelling from '../components/homePage/BestSelling';
import SectionBrands from '../components/homePage/SectionBrands';
import SectionBlog from '../components/homePage/SectionBlog';
import SectionContactUs from '../components/homePage/SectionContactUs';
import SectionServices from '../components/homePage/SectionServices';

export default function Home() {

  // const [openNavbar, setOpenNavbar] = useState(false);
  // const [openCart, setOpenCart] = useState(false);
  // const [darkMode, setDarkMode] = useState(true);
  // const [openSubmenu, setOpenSubmenu] = useState(false);


  // const handleNav = () => setOpenNavbar(!openNavbar);
  // const handleCart = () => setOpenCart(!openCart);
  // const handleDarkMode = () => setDarkMode(!darkMode);
  // const handleSubmenu = () => setOpenSubmenu(!openSubmenu);


  // useEffect(() => {

  //   if (openNavbar) {
  //     document.body.style.overflow = 'hidden';
  //   } else if (openCart) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  // }, [openNavbar, openCart]);


  return (
    <main>
      <SectionHome />

      <SectionProducts />

      <CategoryBanner />

      <ProductsCategory />

      <BestSelling />

      <SectionBrands />

      <SectionBlog />

      <SectionContactUs />

      <SectionServices />

    </main>
  );
}

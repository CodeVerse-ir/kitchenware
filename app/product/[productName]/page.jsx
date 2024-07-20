"use client";

import { useState } from "react";
import CartProduct from "../../../components/productPage/CartProduct"
import ChangeInformation from "../../../components/productPage/ChangeInformation"
import Comments from "../../../components/productPage/Comments"
import Description from "../../../components/productPage/Description"

export default function Product({ params }) {
  const { productName } = params

  const [showComment, setShowComment] = useState(false);

  return (
    <>
      <main className="background">

        <section className="blog py-8 md:pt-40 md:pb-10 lg:pt-44 lg:pb-14">
          <div className="container">

            {/* <!-- Section Head --> */}
            <div className="flex items-end justify-between mb-5 md:mb-12">
              <h2 className="section-title">
                محصول
              </h2>
            </div>

            <CartProduct />
            <ChangeInformation showComment={showComment} setShowComment={setShowComment} />
            <Description showComment={showComment} />
            <Comments showComment={showComment} />

          </div>
        </section>

      </main>
    </>
  )
}

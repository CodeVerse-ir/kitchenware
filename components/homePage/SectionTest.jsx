import { useState } from "react";
import GetData from "../../axios/GetData";

export default function SectionTest() {

    const [test, setTest] = useState(null);

    return (
        <>

            <GetData setData={setTest} path="products" />

            {/* Loader */}
            {!test && <div>در حال بارگذاری داده‌ها...</div>}

            {
                test && <p>{test.productName}</p>
            }

       </>
    )
}

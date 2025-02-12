// guna titik 3 adalah untuk menangkap semua slug dari routingnya
// import { useRouter } from "next/router"
// // mengambil fitur router secara dinamis
// const DetailProductPage = () => {
//     const router = useRouter();
//     console.log(router)
//     return (
//         <div>
//             <h1>Detail Product </h1>
//             <p> Product :</p>
//         </div>
//     )
// }

// export default DetailProductPage

import { useRouter } from "next/router"
// mengambil fitur router secara dinamis
const ShopProductPage = () => {
    const {query} = useRouter();

    // mengubah slug menjadi array
    // console.log(query)
    return (
        <div>
            <h1>Detail Product </h1>
            <p> 

                {/* Product : {query.slug ? query.slug[0] : ""} - {query.slug && query.slug[1]} */}
                {/* ternery/&& untuk mengatasi undifined pada slug  */}

                Product : {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}
                {/* mengabungkan 2 array slug */}
            </p>
            {/* memudahkan dalam membuat sistem kategori */}
            {/* mengubah nama product dengan router di / https contoh http://localhost:3000/product/baju*/}
        </div>
    )
}

export default ShopProductPage
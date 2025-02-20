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
const DetailProductPage = () => {
    const {query} = useRouter();
    return (
        <div>
            <h1>Detail Product </h1>
            <p> Product : {query.id}</p>
            {/* mengubah nama product dengan router di / https contoh http://localhost:3000/product/baju*/}
        </div>
    )
}

export default DetailProductPage
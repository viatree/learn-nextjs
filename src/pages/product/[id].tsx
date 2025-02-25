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
import useSWR from "swr";
import { fetcher } from "@/utils/db/swr";
import { useRouter } from "next/router"
import DetailProduct from "@/views/DetailProduct";

// mengambil fitur router secara dinamis
const DetailProductPage = () => {
    const {query} = useRouter();

    const { data,error, isLoading } = useSWR(
        `/api/product/${query.product}`,fetcher);
        //   console.log(data);
    //   console.log(error);
    console.log(isLoading);
    return (
        <div>
            <h1>Detail Product </h1>
            <DetailProduct product={isLoading ? [] : data.data}/>
            
            {/* <p> Product : {query.id}</p> */}
            {/* mengubah nama product dengan router di / https contoh http://localhost:3000/product/baju*/}
        </div>
    )
}

export default DetailProductPage
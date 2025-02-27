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
// import useSWR from "swr";
// import { fetcher } from "@/utils/db/swr";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router"
// import DetailProduct from "@/views/DetailProduct";

// mengambil fitur router secara dinamis

// menggunakan client side rendering di dalam dynamic routing tangkap query dengan userouter dan fetch data mengunakan useSWR ke product ketika data product blom siap baru ditampilkan dengan is loading.
const DetailProductPage = ({ product }: {product : ProductType}) => {
    const {query} = useRouter();
    // Client-side
    // const { data, isLoading } = useSWR(
    //     `/api/product/${query.product}`,fetcher);
        //   console.log(data);
    //   console.log(error);
    // console.log(isLoading);
    return (
        <div>
            {/* Client-side */}
            {/* <h1>Detail Product </h1>
            <DetailProduct product={isLoading ? {} : data.data}/> */}
            {/* <p> Product : {query.id}</p> */}
            {/* mengubah nama product dengan router di / https contoh http://localhost:3000/product/baju*/}

            {/* Server-side & static-side sama karena akan menampilkan data di sisi server*/}
            <DetailProduct product={product}/>
        </div>
    )
}

export default DetailProductPage
// server side rendering
// memangggil getServerSideProps dengan params product dan mengambil data di sisi server dan fetch dari id product dan const response.
// export async function getServerSideProps({params} : {params: {product: string}} ) {
//     console.log(params.product);
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/product/${params.product}`)
//     const response = await res.json()
//     console.log(response)

//     return{
//         props: {
//             product: response.data
//         }
//     }
// }

// Static Site generation

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/product')
    const response = await res.json()
    // daftarkan dlu path nya
    const path = response.data.map((product: ProductType) => ({
        params: {
            product: product.id.toString()
        }
    }))
    // console.log(path)
    // mengirimkan path berupa ID 
    return{
        paths: path,
        fallback: false}
}
export async function getStaticProps({params} : {params: {product: string}} ) {
    const res = await fetch(`http://localhost:3000/api/product/${params.product}`)
    const response = await res.json()
    console.log(response)

    return{
        props: {
            product: response.data
        }
    }
}
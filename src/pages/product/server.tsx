import ProductView from "@/views/Product"
import { ProductType } from "@/types/product.type"

const ProductPage = (props: {products: ProductType[] }) => {
const {products} = props
    return (
        <div>
        <ProductView products={products}/>
        </div>
    )
}
export default ProductPage

// dipanggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/product')
    const response = await res.json()
    console.log(response)

    return{
        props: {
            products: response.data
        }
    }
}

// Server side rendering 
// ketika masuk page/ refresh tidak akan muncul skeleton karena akan melakukan/ menyiapkan data di sisi server atau yang biasa disebut hydration baru akan menampilkan data di sisi client dan UI nya interactive di sisi client. 
// server side rendering akan menampilkan data di sisi server

// Client side rendering
// ketika masuk page/ refresh akan muncul skeleton karena akan melakukan/ menyiapkan data di sisi client atau yang biasa disebut hydration
// perbedaan yang kedua ketika melkukan inspect dan masuk ke network melakukan filter by fetch/XHR ketika di refresh dan mendapatkan API response maka akan menampilkan data di sisi client
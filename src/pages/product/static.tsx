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

// tetap membuat page static menggunakan getStaticProps ketika tetap ingin mengambil data dari api.
export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/product`);
    const response = await res.json()
    console.log(response)

    return{
        props: {
            products: response.data
        }
    }
}
// kalau kita tidak mengambil data / fetch data dari api secara default next.js akan menagnggap fetch sebagai static site generation atau static page generation.
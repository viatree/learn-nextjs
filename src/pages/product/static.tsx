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
        },
        // trigger regenerate page, jadi ketika membuka halaman akan memeriksa data di API apakah API nya berbeda dengan data yang di catch jika berbeda maka akan di revalidate.
        // revalidate: 10, 
        // ketika 10 detik next.js akan melakukan regeneration / memperbaharui data yang di catch
        // menghapus catch dari data yang sebelumnya dengan data yang baru 

    }
}
// kalau kita tidak mengambil data / fetch data dari api secara default next.js akan menagnggap fetch sebagai static site generation atau static page generation.
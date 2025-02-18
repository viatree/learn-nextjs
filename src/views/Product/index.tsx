import styles from "./Product.module.scss";

type ProductType = {
    id: number;
    name: string;
    price: number;
    size: string;
    image: string;
    category: string;
};

/**
 * Renders a list of products in a grid layout
 * @param {ProductType[]} products - An array of product objects
 * @returns {JSX.Element} A JSX element representing the product list
 */
const ProductView = ({ products }: { products: ProductType[] }) => {
    console.log(products);
    // jika di inspect ketika refresh ada moment array nya akan kosong terlebih dahulu baru akan memunculkan data, ketika datanya sudah siap dan dilakukan di client side rendering, kita dapat memanfaatkan data kosong nya untuk membuat skeleton nya
    return (
        <div className={styles.product}>
            <h1 className={styles.product_title}>Product</h1>
            <div className={styles.product_content}>
                {products.length > 0 ? (
                    <>
             {/* conditional rendering: ketika data nya ada menampilkan data nya */}
                {products.map((product : ProductType) => (
                    <div key={product.id} className={styles.product_content_item}>
                        <div className={styles.product_content_item_image}>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h4 className={styles.product_content_item_name}>{product.name}</h4>
                        <p className={styles.product_content_item_category}>{product.category}</p>
                        <p className={styles.product_content_item_price}>${product.price.toLocaleString("en-US")}</p>
                        {/* menambahkan format currency */}
                    </div>
                ))}
                    </>
                ):(
                    <div className={styles.product_content_skeleton}>    
                      <div className={styles.product_content_skeleton_image}></div>
                      <div className={styles.product_content_skeleton_name}></div>    
                      <div className={styles.product_content_skeleton_category}></div>    
                      <div className={styles.product_content_skeleton_price}></div>    
                  </div>
                )}
                {/* contoh penambahan skeleton loading */}
            </div>
        </div>
    );
};

export default ProductView;

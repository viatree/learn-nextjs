import styles from "./DetailProduct.module.scss";
import { ProductType } from "@/types/product.type";

const DetailProduct = ({product}: {product : ProductType}) => {
    return (
        <div className={styles.productDetail}>
        <div className={styles.productDetail_image}>
            <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail_name}>{product.name}</h4>
        <p className={styles.productDetail_category}>{product.category}</p>
        <p className={styles.productDetail_price}>${product.price?.toLocaleString("en-US")}</p>
        {/* menambahkan format currency */}

        {/* menambahkan format currency */}
    </div>
    )
}       

export default DetailProduct
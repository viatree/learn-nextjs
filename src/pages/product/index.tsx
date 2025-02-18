import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "@/views/Product/index";


const ProductPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLogin, setIsLogin] = useState(true);
    const [products, setProducts] = useState([]);
    console.log(products);
    // ([]) dibuat array kodong untuk default value
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    useEffect(() => {
        // saat halaman di load akan mengambil data/meload data
        fetch("/api/product")
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data);
            });
    }, []);
    return (
      <div>
        <ProductView products={products}/>
      </div>
    );
};

export default ProductPage;

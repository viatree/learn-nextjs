import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};

const ProductPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLogin, setIsLogin] = useState(true);
    const [products, setProducts] = useState([]);
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
            <h1> Product Page </h1>
            {products.map((product: productType) => {
                return (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <p>{product.size}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductPage;

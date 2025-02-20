/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetcher } from "@/utils/db/swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "@/views/Product/index";
import useSWR from "swr";

const ProductPage = () => {
     
    const [isLogin, setIsLogin] = useState(true);
    // const [products, setProducts] = useState([]);
    // console.log(products);
    // ([]) dibuat array kosong untuk default value
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    const { data, error, isLoading } = useSWR(
        "/api/product",fetcher);
    //   console.log(data);
    //   console.log(error);
    //   console.log(isLoading);
    //   true ktika loading dan false ketika sudah berhenti loading


    // useEffect(() => {
    //     // saat halaman di load akan mengambil data/meload data
    //     fetch("/api/product")
    //         .then((res) => res.json())
    //         .then((response) => {
    //             setProducts(response.data);
    //         });
    // }, []);
    return (
      <div>
        <ProductView products={isLoading ? [] : data.data}/>
        {/* jika datanya true maka akan menampilkan array kosong,jika data nya false maka akan menampilkan datanya dari data.data */}
      </div>
    );
};

export default ProductPage;

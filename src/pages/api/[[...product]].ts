// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/utils/db/services";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status:boolean,
    statusCode: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    // {
    //     id:number;
    //     name:string;
    //     price:number;
    //     size: string;
    // }[];
};

/**
 * API Route untuk mengambil data product
 * 
 * @param {NextApiRequest} req - request yang dikirim dari client
 * @param {NextApiResponse<Data>} res - response yang dikirimkan ke client
 * 
 * @returns {NextApiResponse<Data>}
 */
export default async function handler(
    // tipe yang digunakan disediakan next.js jika menggunakan typescript
    req: NextApiRequest,
    res: NextApiResponse<Data>,
    // sebuah data yang di definisikan jika menggunakan TS
) {
    if (req.query.product![1]) {
        const data = await retrieveDataById("products", req.query.product![1]);
        res.status(200).json({ status: true, statusCode: 200, data: data });
    } else {
        const data = await retrieveData("products");
    console.log(data);
    // [
    //     {
    //         id: 1,
    //         name: "baju",
    //         price: 10000,
    //         size: "xl",
    //     },
    //     {
    //         id: 1,
    //         name: "Celana",
    //         price: 30000,
    //         size: "L",
    //     },

    // ]
    res.status(200).json({ status: true, statusCode: 200, data: data });
    // res.status(200).json({ status:true, statusCode:200,data });
    // res.status akan mengirimkan respon 200 yang artinya success dan data berupa json
    // status dalam object serta status code merupakan standarisasi 
}
    }
    // console.log(req.query.product);
    
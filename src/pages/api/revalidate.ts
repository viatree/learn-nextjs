// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// ondiment revalidation, dapat melakukan revlidate dengan manual jika terjadi perubahan di dalam database
type Data = {
  revalidated: boolean,
  message?: string
};

export default async function handler(
  // tipe yang digunakan di nsediakan next.js jika menggunakan typescript
  req: NextApiRequest,
  res: NextApiResponse<Data>, 
  // sebuah data yang di definisikan jika menggunakan TS
) {

  // menambahkan token untuk lebih secure
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ revalidated: false, message: "invalid token" });
  }

  console.log(req.query.data);
  if (req.query.data === "product") {
    try{
        await res.revalidate("/product/static");
        return res.json ({ revalidated: true })
    } catch (error) {
        return res.status(500).send({revalidated: false})
    }
    }

    return res.json({ revalidated: false,
      message: "select correct data"
     });
  }

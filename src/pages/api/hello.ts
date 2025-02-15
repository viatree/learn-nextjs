// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  age: number;
};

export default function handler(
  // tipe yang digunakan di nsediakan next.js jika menggunakan typescript
  req: NextApiRequest,
  res: NextApiResponse<Data>, 
  // sebuah data yang di definisikan jika menggunakan TS
) {
  res.status(200).json({ name: "John Doe", age: 42 });
  // res.status akan mengirimkan respon 200 yang artinya success dan data berupa json 
}

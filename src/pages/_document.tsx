import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* bersifat general seluruh akan berubah jika ada perubahan di dalam _document karena digunakan di seluruh halaman */}
      {/* pada head dapat digunakan untuk menaruh link atau  menaruh analythic serta meta tag*/}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

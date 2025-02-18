export const fetcher = (url: string) => fetch(url).then((res) => res.json());

// dijadikan component agar bisa digunakan lagi
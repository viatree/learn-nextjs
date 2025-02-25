import { collection, getDocs, getFirestore,doc,getDoc } from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);
// firestrore berasal dari firebase nama app yang sudah di initialize

export async function retrieveData(collectionName: string) {
    // agar tidak langsung ke products, dapat digunakan untuk collection yang lain 
    const snapshot = await getDocs(collection(firestore, collectionName));
    // mengambil data dari dalam firebase biasa dinamankan snapshot
    // getDocs dan collection berasal dari firebase dan jangan lupa untuk mengimportnya
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), 
        // memanggil semua dataa
    }));

    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data()
    return data;
}
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Login.module.scss"
// next.js punya routeran sendiri sehingga tidak perlu memakai react router

const LoginViews = () => {
    const {push} = useRouter();
    const handleLogin = () => {
        push("/product")
    }

    return (
        <div className={styles.login}>
            <h1 className="big"> Login Page </h1>
            <button onClick={() => handleLogin()}> Login </button>
            <p style={{color: "red", border: "1px solid red", borderRadius: "10px"}}>
                {/* sudah menjadi syntax jsx bukan sebagai style inline di html */}
                Belum punya akun? silahkan <Link href="/auth/register">Register</Link>   
                {/*pada react router props yang digunakan adalah to tetapi pada next link props digunakan href  */}
            </p>
            
        </div>
    )
}
export default LoginViews
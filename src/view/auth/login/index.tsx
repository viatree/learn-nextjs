import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Login.module.css"
// next.js punya routeran sendiri sehingga tidak perlu memakai react router

const LoginViews = () => {
    const {push} = useRouter();
    const handleLogin = () => {
        push("/product")
    }

    return (
        <div className={styles.logins}>
            <h1> Login Page </h1>
            <button onClick={() => handleLogin()}> Login </button>
            <p>
                Belum punya akun? silahkan <Link href="/auth/register">Register</Link>   
                 {/*pada react router props yang digunakan adalah to tetapi pada next link props digunakan href  */}
            </p>
            
        </div>
    )
}
export default LoginViews
import Link from "next/link"
const RegisterPage = () => {
    return (
        <div>
            <h1> Register Page </h1>
            <p>
                Sudah punya akun? <Link href="/auth/login">Login</Link>   
                {/*pada react router props yang digunakan adalah to tetapi pada next link props digunakan href  */}
            </p>
        </div>
    )
}

export default RegisterPage
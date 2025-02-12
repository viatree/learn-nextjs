import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"]; 
const AppShell = (props: AppShellProps) => {
    const {children} = props;
    const { pathname } = useRouter();
    // console.log(router); 
    // ketika di inspect akan menampilkan aspath yang sedang aktif, tetapi pada pathname tidak menampilkan query nya.
    return (
        <main>
           {!disableNavbar.includes(pathname) && <Navbar/> }
           {/* untuk mendisable navbar pada login dan register page tetapi di page lain tetap menampilkan navbar */}
            {children}
        </main>
    )
}

export default AppShell
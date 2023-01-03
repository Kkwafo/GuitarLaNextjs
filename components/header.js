import Image from "next/image"
import logo from "../public/img/logo.svg"
import Link from "next/link"
import styles from "../styles/header.module.css"
import {useRouter} from "next/router"

export default function Header() {
    const router = useRouter()
    // console.log(router)

  return (

    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href={"/"}>
                <Image className="img"
                    src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" />
            </Link>
            <nav className={styles.navegacion}>
                <Link  legacyBehavior href="/">
                <a className={router.pathname ==="/" ? styles.active : ""}> Inicio </a>
                </Link>
            
                <Link legacyBehavior href="/nosotros"> 
                <a className={router.pathname ==="/nosotros" ? styles.active : ""}> Nosotros </a>
                </Link>
                
                <Link legacyBehavior href="/blog"> 
                <a className={router.pathname ==="/blog" ? styles.active : ""}> Blog </a>
                </Link>
                <Link legacyBehavior href="/tienda"> 
                <a className={router.pathname ==="/tienda" ? styles.active : ""}> Tienda </a>
                </Link>

                <Link href="/carrito">
                    <Image width={30} height={30} src="/img/carrito.png" alt="imagen carrito" />
                 </Link>
            </nav>
        </div>
    </header>
  )
}

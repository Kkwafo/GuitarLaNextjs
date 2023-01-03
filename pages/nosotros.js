import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
        title={"nosotros"}
        description={"Sobre nosotros, guitarLA, tienda de musica"}>
      <main className="contenedor">
        <h1 className="heading"> Nosotros </h1>

        <div className={styles.contenido}>
        <Image alt="Imagen sobre nosotros" src="/img/nosotros.jpg" width={1000} height={800}
        />
        <div>
          <p> Somos una empresa dedicada y comprometida con la musica, la cultura y el acceso de todos a los instrumentos musicales.
          Tambien formamos profesionales</p>
          <p>Realizamos cursos y capacitaciones de la mano de los mejores musicos</p>
        </div>

        </div>
      </main>
    </Layout>
  )
}

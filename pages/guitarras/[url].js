import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"
import Guitarra from "../../components/guitarra"



export default function Producto ({guitarra, agregarCarrito}) {
    const [cantidad, setCantidad] = useState(0);
    const {descripcion, imagen, nombre, precio} = guitarra[0].attributes
    
    console.log(cantidad)
    const handleSubmit = e => {
        e.preventDefault()
        if(cantidad < 1 ) {
            alert ("Cantidad no valida")
            return
        }
        //este objeto es el carrito ↓↓ ↓
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
        //info por context api  --> me voy para _apps.js y cambio auth a true
    }


return (
    <Layout title= {`Guitarra ${nombre}`}>
    <div className={styles.guitarra}>
    <Image src={imagen.data.attributes.url} alt={`Imagen guitarra${nombre}`} width={600} height={400}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <form className={styles.formulario}
            onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad: </label>
            <select 
            onChange = {e => setCantidad(Number(e.target.value))}
            id="cantidad"> 
            <option value="0"> --Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3 ">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <input
                type="submit"
                value="Agregar al carrito"
                >

            </input>
        </form>
      </div>
  </div>
  </Layout>
)

}

export async function getServerSideProps({query : {url}}) {

    const respuesta = await fetch (`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data : guitarra} = await respuesta.json()
   
    return {
        props: {
            guitarra
        }
    }
}





// export async function getStaticProps({params: {url}}) {


//     const respuesta = await fetch (`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()
//     console.log(respuesta)
//     console.log(guitarra)
    


// return {
//     props: {
//         guitarra
//     }
// }
// }

// export async function getStaticPaths(){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
//     const {data} = await respuesta.json()
//     console.log(data)
    
//     const paths = data.map(guitarra => ({
//         params: {
//             url: guitarra.attributes.url
//         }
//     }))
//     return {
//         paths,
//         fallback: false
//     }

// }
import {Html, Head, Main, NextScript} from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <meta name="description" content="GuitarLA - Venta de guiatarras y blog de musica"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = {"true"}/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lato:wght@400;700;900&family=Merriweather&family=Montserrat:wght@100;400;900&family=Outfit:wght@400;700;900&family=Sacramento&family=Ubuntu:ital,wght@0,500;0,700;1,400&display=swap" rel="stylesheet"/>
      <link rel ="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui';

interface Props {
    title?: string
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin);

export const Layout: FC<Props> = ({ children, title }) => {


  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Angel Tatis"/>
            <meta name="descripcion" content="Información sobre pokemon XXXX"/>
            <meta name="keywords" content="XXXX, pokemon, pokedex" />
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>


        {/* Navbar */}
        <Navbar/>


        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tsunami | Clapham</title>
                <meta name="description" content="Tsunami | Clapham | Japanese Restaurant" />
                <link rel="icon" href="/logo/tsunami_favicon.svg" />
            </Head>

            <main>
                <p>Modern space with banquettes and a bar with a floral design, serving Japanese food plus cocktails.</p>
                <Link href="/">discover our menu</Link>
                <br /><br />
                <div className="image"></div>
                <h1>TSUNAMI</h1>
            </main>
    </div>
    )
}
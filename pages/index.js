import Head from 'next/head'

// Components
import Hero from '../components/home/Hero'
import Section_b from '../components/home/Section_b'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tsunami | Clapham</title>
                <meta name="description" content="Tsunami | Clapham | Japanese Restaurant" />
                <link rel="icon" href="/logo/tsunami_favicon.svg" />
            </Head>

            <main>
                <Hero />
                <Section_b />
            </main>
    </div>
    )
}
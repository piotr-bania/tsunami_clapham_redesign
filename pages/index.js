import Head from 'next/head'

// Components
import Hero from '../components/home/Hero'
import Section_b from '../components/home/Section_b'
// import ImageSlider from '../components/image/Image_Slider'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tsunami | Clapham</title>
                <meta name="description" content="Tsunami | Clapham | Japanese Restaurant" />
                <link rel="icon" href="/logo/tsunami_favicon.svg" />
            </Head>

            <main>
                {/* <ImageSlider /> */}
                <Hero />
                <Section_b />
            </main>
    </div>
    )
}
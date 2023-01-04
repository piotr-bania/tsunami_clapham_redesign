import Head from 'next/head'
import { motion as m } from 'framer-motion'

// Components
import Hero from '../components/home/Hero'
import Section_b from '../components/home/Section_b'
// import ImageSlider from '../components/image/Image_Slider'

export default function Home() {
    return (
        <m.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1.5, ease: 'easeOut', delay: 0.25}}
        >
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
    </m.div>
    )
}
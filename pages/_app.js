// Styles
import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/home/hero.scss'

// Components
import Layout from '../components/Layout'


function MyApp({ Component, pageProps, router }) {
    return (
        <Layout>
            <div>
                <Component key={router.pathname} {...pageProps} />
            </div>
        </Layout>
    )
}

export default MyApp
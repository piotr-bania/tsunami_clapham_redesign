import '../styles/globals.scss'
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
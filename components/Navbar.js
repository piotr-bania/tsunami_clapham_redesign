import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo/tsunami_logo.svg'

const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='header'>
                <div className="burger">|||</div>
                <Link href="/">
                    <Image className='logo' src={logo} alt="logo" width={120} height={28} />
                </Link>
                <Link href="/">reserve a table</Link>
            </div>
        </section>
    )
}

export default Navbar
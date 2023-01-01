import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo/tsunami_logo.svg'

const Navbar = () => {
    return (
        <div>
            <Link href="/">
                <Image className='logo' src={logo} alt="logo" width={120} height={60} />
            </Link>
        </div>
    )
}

export default Navbar
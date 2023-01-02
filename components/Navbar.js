import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo/tsunami_logo.svg'
import burger from '../public/logo/burger.svg'

const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='header'>
                {/* Left */}
                <div className="burger">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 55.38">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <g className='chopstick chopstick_bottom'>
                                <path className="white"
                                    d="m53,37.34v16.7l-43,1.34c-5.47.17-10-4.22-10-9.69s4.36-9.69,9.69-9.69h.31l43,1.34Z" />
                                <path className="beige"
                                    d="m300,45.69c0,.4-.5.72-1.12.72l-245.88,7.63v-16.7l245.88,7.63c.62,0,1.12.32,1.12.72Z" />
                            </g>
                            <g className='chopstick chopstick_top'>
                                <path className="white"
                                    d="m53,1.34v16.7l-43,1.34c-5.47.17-10-4.22-10-9.69S4.36,0,9.69,0h.31l43,1.34Z" />
                                <path className="beige"
                                    d="m300,9.69c0,.4-.5.72-1.12.72l-245.88,7.63V1.34l245.88,7.63c.62,0,1.12.32,1.12.72Z" />
                            </g>
                        </g>
                    </svg>
                </div>
                {/* Middle */}
                <Link href="/">
                <Image className='logo' src={logo} alt="logo" width={120} height={28} />
                </Link>
                {/* Right */}
                <Link href="/">reserve a table</Link>
            </div>
        </section>
    )
}

export default Navbar
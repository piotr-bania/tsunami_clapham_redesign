import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo/tsunami_logo.svg'
import burger from '../public/logo/burger.svg'
import Burger from './Burger'

const Navbar = () => {

    return (
        <section className='navbar'>
            <div className='header'>
                
                {/* Left */}
                <Burger />

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
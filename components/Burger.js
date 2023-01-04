import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion as m } from 'framer-motion'
import { gsap } from 'gsap'

import burger from '../public/logo/burger_closed.svg'

const Burger = () => {
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    const t1 = gsap.timeline()
    gsap.fromTo(".links",
    {opacity: 0},
    {opacity: 1, duration: 1, stagger: 0.15})
})

const handleClick = () => {
    setIsOpen(!isOpen)
    }
    return (
        <div>
            <Image onClick={handleClick} className='burger' src={burger} alt="burger" width={28} height={28} />
            {isOpen && (
                <nav className='links'>
                    <Link className='link' href="/menu"><p>01</p><h1>Menu</h1></Link>
                    <Link className='link' href="/promotions"><p>02</p><h1>Promotions</h1></Link>
                    <Link className='link' href="/reservations"><p>03</p><h1>Reservations</h1></Link>
                    <Link className='link' href="/delivery"><p>04</p><h1>Collection/Delivery</h1></Link>
                    <Link className='link' href="/gallery"><p>05</p><h1>Gallery</h1></Link>
                    <Link className='link' href="/voucher"><p>06</p><h1>Gift Vouchers</h1></Link>
                    <Link className='link' href="/hours"><p>07</p><h1>Opening Hours</h1></Link>
                    <Link className='link' href="/contact"><p>08</p><h1>Contact</h1></Link>
                </nav>
            )}
        </div>
    )
}

export default Burger
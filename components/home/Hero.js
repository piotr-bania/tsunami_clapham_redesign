import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='hero_section'>
            <div className="image image_1"></div>
            <div className="image image_2"></div>
            <div className="image image_3"></div>

            <div className="subheader_hero">
                <p>Modern space with banquettes and a bar with a floral design, serving Japanese food plus cocktails.</p>
                <Link href="/">discover our menu</Link>
            </div>

            <h1 className='header_hero'>TSUNAMI</h1>
        </section>
    )
}

export default Hero
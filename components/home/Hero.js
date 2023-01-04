import React from 'react'
import Link from 'next/link'

import Element_1 from '../webgl_elements/Element_1'
import Element_2 from '../webgl_elements/Element_2'
import Element_3 from '../webgl_elements/Element_3'

const Hero = () => {
    return (
        <section className='hero_section'>
            <div className=" image_1"><Element_1 /></div>
            <div className=" image_2"><Element_2 /></div>
            <d3v className=" image_3"><Element_3 /></d3v>

            <div className="subheader_hero">
                <p>Modern space with banquettes and a bar with a floral design, serving Japanese food plus cocktails.</p>
                <Link href="/">discover our menu</Link>
            </div>

            <h1 className='header_hero'>TSUNAMI</h1>
        </section>
    )
}

export default Hero
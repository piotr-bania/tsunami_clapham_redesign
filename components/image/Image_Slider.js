import React, { useState, useEffect } from 'react'

function ImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const images = ['/images/image_1.png', '/images/image_2.png', '/images/image_3.png', '/images/image_4.png']

    useEffect(() => {
    const interval = setInterval(() => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
    }, [currentImageIndex])

    return (
        <img className='slider' src={images[currentImageIndex]} />
    )
}

export default ImageSlider
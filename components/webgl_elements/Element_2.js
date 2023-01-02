import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import VertexShader from '../../shaders/vertex.glsl'
import FragmentShader from '../../shaders/fragment.glsl'
import { shaderMaterial } from '@react-three/drei'

const WaveMaterial = shaderMaterial({
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
    vertexShader: VertexShader,
    fragmentShader: FragmentShader
})

extend({WaveMaterial})

const Wave = () => {
    const ref = useRef()
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))
    
    const [image] = useLoader(THREE.TextureLoader, [
        'images/image_2.jpg',
    ])

    return (
        <mesh>
            <planeGeometry args={[9, 7.8, 32, 32]} />
            <waveMaterial ref={ref} uTexture={image} />
        </mesh>
    )
}

const Element_2 = () => {
return (
    <Canvas className='image canvasElement2' camera={{ fov: 30, position: [0, 0, 15] }}
    style={{
        width: "auto",
        layout: "responsive",
        objectFit: "contain"
    }}>
        <Suspense fallback={null}>
            <Wave />
        </Suspense>
    </Canvas>
)
}

export default Element_2
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Box, OrbitControls, Environment, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

// Floating geometric shapes
function FloatingShapes() {
    return (
        <>
            {/* Sphere */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Sphere position={[-2, 0, 0]} args={[0.6, 32, 32]}>
                    <MeshDistortMaterial
                        color="#4A90E2"
                        attach="material"
                        distort={0.4}
                        speed={2}
                    />
                </Sphere>
            </Float>

            {/* Torus */}
            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
                <Torus position={[2, 1, -1]} args={[0.5, 0.2, 16, 32]}>
                    <MeshDistortMaterial
                        color="#FF6B6B"
                        attach="material"
                        distort={0.3}
                        speed={1.5}
                    />
                </Torus>
            </Float>

            {/* Octahedron */}
            <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2.5}>
                <Octahedron position={[0, -1.5, -0.5]} args={[0.7]}>
                    <MeshDistortMaterial
                        color="#4ECDC4"
                        attach="material"
                        distort={0.5}
                        speed={1.8}
                    />
                </Octahedron>
            </Float>

            {/* Box */}
            <Float speed={2.2} rotationIntensity={2.5} floatIntensity={2}>
                <Box position={[-1.5, -2, 1]} args={[0.8, 0.8, 0.8]}>
                    <MeshDistortMaterial
                        color="#FFE66D"
                        attach="material"
                        distort={0.6}
                        speed={2}
                    />
                </Box>
            </Float>

            {/* Additional small spheres */}
            <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
                <Sphere position={[2.5, -1, 0.5]} args={[0.4, 32, 32]}>
                    <MeshDistortMaterial
                        color="#A855F7"
                        attach="material"
                        distort={0.3}
                        speed={1.5}
                    />
                </Sphere>
            </Float>

            <Float speed={1.7} rotationIntensity={1.2} floatIntensity={2}>
                <Sphere position={[-2.5, 1.5, -0.8]} args={[0.35, 32, 32]}>
                    <MeshDistortMaterial
                        color="#EC4899"
                        attach="material"
                        distort={0.4}
                        speed={1.8}
                    />
                </Sphere>
            </Float>
        </>
    )
}

// Rotating ring animation
function RotatingRing() {
    const meshRef = useRef()

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.2
        meshRef.current.rotation.y += delta * 0.3
    })

    return (
        <mesh ref={meshRef} position={[0, 0, -2]}>
            <torusGeometry args={[2, 0.1, 16, 100]} />
            <meshStandardMaterial color="#4A90E2" wireframe />
        </mesh>
    )
}

// Main 3D Scene Component
const Scene3D = () => {
    return (
        <div className="w-full h-full absolute inset-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4A90E2" />
                <pointLight position={[10, -10, -5]} intensity={0.5} color="#FF6B6B" />

                {/* Background Stars */}
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />

                {/* Floating Shapes */}
                <FloatingShapes />

                {/* Rotating Ring */}
                <RotatingRing />

                {/* Environment for reflections */}
                <Environment preset="night" />

                {/* Controls (disabled for auto-rotation) */}
                {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>
        </div>
    )
}

export default Scene3D

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Dodecahedron, MeshWobbleMaterial } from '@react-three/drei'

// Wobbling Geometric Shape
function WobblingShape({ color = "#4A90E2", position = [0, 0, 0] }) {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
            <Dodecahedron position={position} args={[1, 0]}>
                <MeshWobbleMaterial
                    color={color}
                    attach="material"
                    factor={0.6}
                    speed={1.5}
                />
            </Dodecahedron>
        </Float>
    )
}

// Decorative 3D Element Component
const Decorative3D = ({ color = "#4A90E2" }) => {
    return (
        <div className="w-full h-64 absolute top-0 right-0 pointer-events-none opacity-30">
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <pointLight position={[-5, 5, 5]} color={color} intensity={0.5} />
                <WobblingShape color={color} />
            </Canvas>
        </div>
    )
}

export default Decorative3D

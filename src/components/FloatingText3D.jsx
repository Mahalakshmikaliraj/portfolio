import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei'

// Animated 3D Text
function AnimatedText() {
    const textRef = useRef()

    useFrame((state) => {
        if (textRef.current) {
            textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Center>
                <Text3D
                    ref={textRef}
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={0.5}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    UI/UX
                    <meshNormalMaterial />
                </Text3D>
            </Center>
        </Float>
    )
}

// Small 3D Canvas for Section Headers
const FloatingText3D = ({ text = "Design" }) => {
    return (
        <div className="w-32 h-32 mx-auto">
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <AnimatedText />
            </Canvas>
        </div>
    )
}

export default FloatingText3D

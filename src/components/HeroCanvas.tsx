import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useMemo } from 'react'

function HeroCanvas() {
  const meshRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(3, 2), [])
  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#00d4aa',
    metalness: 0,
    roughness: 0.2,
    transmission: 0.5,
    thickness: 0.5,
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  }), [])

  useFrame((_, delta) => {
    time.current += delta
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.position.y = Math.sin(time.current * 0.8) * 0.5
      meshRef.current.scale.setScalar(1 + Math.sin(time.current * 0.5) * 0.05)
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} color="#00d4aa" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#0099ff" />
      <pointLight position={[0, 5, 10]} intensity={2} color="#00d4aa" distance={30} decay={2} />
      <mesh ref={meshRef} geometry={geometry} material={material} />
    </>
  )
}

export default HeroCanvas
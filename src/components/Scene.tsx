import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function FloatingOrbs() {
  const meshRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)
  const colors = useMemo(() => [new THREE.Color('#00d4aa'), new THREE.Color('#0099ff'), new THREE.Color('#7c3aed')], [])

  useFrame((_, delta) => {
    time.current += delta
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05
      meshRef.current.rotation.y += delta * 0.07
      meshRef.current.position.y = Math.sin(time.current * 0.5) * 2
    }
  })

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(4, 1), [])
  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: colors[0],
    metalness: 0.1,
    roughness: 0.3,
    transmission: 0.3,
    thickness: 0.5,
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide,
  }), [])

  return <mesh ref={meshRef} geometry={geometry} material={material} position={[0, 0, -10]} />
}

function GridFloor() {
  const gridRef = useRef<THREE.GridHelper>(null)
  const time = useRef(0)

  useFrame((_, delta) => {
    time.current += delta
    if (gridRef.current) {
      gridRef.current.position.z = (time.current * 2) % 10
    }
  })

  return (
    <group>
      <gridHelper ref={gridRef} args={[100, 50, '#00d4aa22', '#00d4aa11']} position={[0, -15, 0]} />
    </group>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const time = useRef(0)

  useFrame((_, delta) => {
    time.current += delta
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.01
      const positions = pointsRef.current.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time.current + positions[i] * 0.1) * delta * 0.5
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const color1 = new THREE.Color('#00d4aa')
    const color2 = new THREE.Color('#0099ff')

    for (let i = 0; i < count; i++) {
      const radius = 30 + Math.random() * 40
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      phi)
      const color = color1.clone().lerp(color2, Math.random())
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      sizes[i] = Math.random() * 2 + 0.5
    }
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    g.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    return g
  }, [])

  const material = useMemo(() => new THREE.PointsMaterial({
    size: 1,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), [])

  return <points ref={pointsRef} geometry={geometry} material={material} position={[0, 0, -20]} />
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00d4aa" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0099ff" />
      <ParticleField />
      <FloatingOrbs />
      <GridFloor />
    </>
  )
}
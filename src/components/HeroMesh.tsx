import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Abstract rotating wireframe — an icosahedron nested in a torus, reacting
// gently to pointer position. Kept intentionally understated: it should read
// as "engineering precision," not a flashy hero animation.
export default function HeroMesh() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#4f6bff'
    const mutedColor = getComputedStyle(document.documentElement).getPropertyValue('--border-strong').trim() || '#3a3a41'

    const icoGeometry = new THREE.IcosahedronGeometry(1.7, 1)
    const icoWire = new THREE.WireframeGeometry(icoGeometry)
    const icoMesh = new THREE.LineSegments(icoWire, new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.85 }))
    scene.add(icoMesh)

    const torusGeometry = new THREE.TorusGeometry(2.6, 0.015, 16, 100)
    const torusMesh = new THREE.Mesh(torusGeometry, new THREE.MeshBasicMaterial({ color: mutedColor, transparent: true, opacity: 0.5 }))
    torusMesh.rotation.x = Math.PI / 2.6
    scene.add(torusMesh)

    const torusMesh2 = torusMesh.clone()
    torusMesh2.rotation.x = -Math.PI / 3
    torusMesh2.rotation.y = Math.PI / 5
    scene.add(torusMesh2)

    let pointerX = 0
    let pointerY = 0
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener('pointermove', handlePointerMove)

    let frameId: number
    const animate = () => {
      icoMesh.rotation.x += 0.0022
      icoMesh.rotation.y += 0.0032
      torusMesh.rotation.z += 0.0012
      torusMesh2.rotation.z -= 0.0009

      camera.position.x += (pointerX * 0.6 - camera.position.x) * 0.03
      camera.position.y += (-pointerY * 0.6 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      icoGeometry.dispose()
      icoWire.dispose()
      torusGeometry.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" aria-hidden="true" />
}

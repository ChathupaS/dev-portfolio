import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float32BufferAttribute, BufferGeometry } from 'three'

function Particles({ count = 4500 }) {
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const geometry = useMemo(() => {
    const positions = []
    const colors = []

    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 12
      )
      const t = Math.random()
      // Blend cyan → violet
      colors.push(
        t * 0.54,
        (1 - t) * 0.72,
        0.84 + t * 0.16
      )
    }

    const geo = new BufferGeometry()
    geo.setAttribute('position', new Float32BufferAttribute(positions, 3))
    geo.setAttribute('color', new Float32BufferAttribute(colors, 3))
    return geo
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const elapsed = state.clock.getElapsedTime()
    mesh.current.rotation.y +=
      (mouse.current.x * 0.35 - mesh.current.rotation.y) * 0.015 + 0.0006
    mesh.current.rotation.x +=
      (mouse.current.y * 0.2 - mesh.current.rotation.x) * 0.015
    mesh.current.rotation.z = elapsed * 0.005
  })

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.038}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  )
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Particles />
    </Canvas>
  )
}

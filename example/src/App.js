import { useFrame } from '@react-three/fiber'
import { useScrollVelocity }  from '@kaliber/use-scroll-velocity'

export default function App() {
  const meshRef = React.useRef()
  const scrollVelocity = useScrollVelocity()

  useFrame(() => {
    const amp = 0.5
    const velocity = scrollVelocity.current * amp
    meshRef.current.rotation.z += velocity
  })

  return <mesh ref={meshRef}></mesh>
}

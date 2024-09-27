import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function IslandA() {
  const texture = useLoader(THREE.TextureLoader, '/logo512.png');
  const { innerWidth: width, innerHeight: height } = window;
  const x = -width / 4; // Quadrant 1 (top left)
  const y = height / 4;

  return (
    <mesh position={[x, y, 0]} scale={[100, 100, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default IslandA;

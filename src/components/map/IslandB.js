// IslandQuadrant2.js
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function IslandB() {
    const texture = useLoader(THREE.TextureLoader, '/logo512.png');
    const { innerWidth: width, innerHeight: height } = window;
    const x = width / 4; // Quadrant 2 (top right)
    const y = height / 4;

    return (
        <mesh position={[x, y, 0]} scale={[50, 50, 1]}>
            <circleGeometry args={[1, 32]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
}

export default IslandB;

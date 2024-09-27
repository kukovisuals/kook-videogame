// SmallSquare.js
import React, { useRef } from 'react';
import { useMovementController } from './controller/useMovementController';

function SmallSquare() {
  const meshRef = useRef();
  const position = useMovementController();

  return (
    <mesh ref={meshRef} position={position} scale={[30, 30, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default SmallSquare;

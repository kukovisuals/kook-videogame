// SmallSquare.js
import React, { useRef, useState, useEffect } from 'react';

function SmallSquare() {
  const meshRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);

  // Movement controller (16 lines)
  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition(([x, y, z]) => {
        switch (event.key) {
          case 'ArrowUp': return [x, y + 10, z];
          case 'ArrowDown': return [x, y - 10, z];
          case 'ArrowLeft': return [x - 10, y, z];
          case 'ArrowRight': return [x + 10, y, z];
          default: return [x, y, z];
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <mesh ref={meshRef} position={position} scale={[100, 100, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default SmallSquare;

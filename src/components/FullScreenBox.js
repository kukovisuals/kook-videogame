// FullScreenBox.js
import React from 'react';

function FullScreenBox() {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="black" />
    </mesh>
  );
}

export default FullScreenBox;

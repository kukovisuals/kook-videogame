// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import FullScreenBox from './components/FullScreenBox';
import SmallSquare from './components/SmallSquare';

function App() {
  return (
    <Canvas  style={{ width: '100vw', height: '100vh' }} orthographic camera={{ zoom: 1, position: [0, 0, 5] }}>
      <FullScreenBox />
      <SmallSquare />
    </Canvas>
  );
}

export default App;

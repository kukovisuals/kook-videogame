// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import FullScreenBox from './components/FullScreenBox';
import SmallSquare from './components/SmallSquare';
import IslandA from './components/map/IslandA';
import IslandB from './components/map/IslandB';
import IslandC from './components/map/IslandC';
import IslandD from './components/map/IslandD';

function App() {
  return (
    <Canvas  style={{ width: '100vw', height: '100vh' }} orthographic camera={{ zoom: 1, position: [0, 0, 5] }}>
      <FullScreenBox />
      <IslandA />
      <IslandB />
      <IslandC />
      <IslandD />
      <SmallSquare />
    </Canvas>
  );
}

export default App;

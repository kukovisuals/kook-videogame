// useMovementController.js
import { useEffect, useState } from 'react';

export function useMovementController() {
  const { innerWidth: width, innerHeight: height } = window;
  const [position, setPosition] = useState([100, 100, 0]); // Start position
  const [direction, setDirection] = useState('right'); // Track direction


  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition(([x, y, z]) => {
        console.log(x, y)
        console.log('width', width)
        switch (event.key) {
          case 'ArrowRight': // Move right within bounds
            return [Math.min(x + 10, width - 500), y, z];
          case 'ArrowLeft': // Move left within bounds
            return [Math.min(x - 10, 500), y, z];
          case 'ArrowUp': // Move up within bounds
            return [x, Math.min(y + 10, 200), z];
          case 'ArrowDown': // Move down within bounds
            return [x, Math.max(y - 10, -height + 100), z];
          default:
            return [x, y, z];
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return position;
}

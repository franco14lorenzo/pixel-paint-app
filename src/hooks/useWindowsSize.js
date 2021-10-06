import { useState, useLayoutEffect } from "react";

export default function useWindowSize() {
  
  const [size, setSize] = useState([0, 0]);
  
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const [width, height] = size;
  const pixelSize = width / 100;
  const rows = Math.floor( height / pixelSize );
  return rows * 100;
}
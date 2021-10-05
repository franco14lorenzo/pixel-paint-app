
import './Display.css';
import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowsSize.js';
import Pixel from '../Pixel/Pixel';

const Display = () => {

  const area = useWindowSize(); 
  const cells = Array.from({ length: area});
  const [holdingClick, setHoldingClick] = useState(false);
  
  return (
    <div id='display'  onMouseDown={() => setHoldingClick(true)} onMouseUp={()=> setHoldingClick(false)}>
      {cells.map((cell, index) => <Pixel key={index} holdingClick={holdingClick}/>)}
    </div>
  ); 
};

export default Display;
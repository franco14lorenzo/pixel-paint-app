
import './Display.css';

import useWindowSize from '../../hooks/useWindowsSize.js';
import Pixel from '../Pixel/Pixel';



const Display = () => {

  const area = useWindowSize(); 
  const cells = Array.from({ length: area})
  
  return (
    <div id="display" >
      {cells.map((cell, index) => <Pixel key={index}/>)}
    </div>
  ) 
}

export default Display;
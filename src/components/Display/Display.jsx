
import './Display.css';
import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowsSize.js';
import Pixel from '../Pixel/Pixel';

const Display = (props) => {

  const {currentColor, setAnchorPoint, setOpenColorPicker} = props;
  const [holdingClick, setHoldingClick] = useState(false);
  const area = useWindowSize(); 
  const cells = Array.from({ length: area});

  const handleContexMenu = (event) => {
    
    setOpenColorPicker(true)
    setAnchorPoint({ x: event.clientX, y: event.clientY });
  }

  const handleOnMouseDown = (event) => {
    
    if (event.buttons === 1){
      setHoldingClick(true)
    }    
  }
  
  
  return (
    <div 
      id='display'  
      onMouseDown={handleOnMouseDown} 
      onMouseUp={()=> setHoldingClick(false)}
      onContextMenu={handleContexMenu}  
    >

      {cells
        .map((cell, index) => 
          <Pixel 
            key={index} 
            currentColor={currentColor}
            holdingClick={holdingClick} 
          />
        )
      }
      
    </div>
  ); 
};

export default Display;
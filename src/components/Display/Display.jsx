
import './Display.css';
import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowsSize.js';
import Pixel from '../Pixel/Pixel';

const Display = (props) => {

  const {currentColor, setAnchorPoint, setOpenColorPicker} = props;
  const [holdingClick, setHoldingClick] = useState(false);
  const [width, height] = useWindowSize();

  const area = () => {
    
    const pixelSize = width / 100;
    const rows = Math.floor( height / pixelSize );

    return rows * 100;
  }

  const cells = Array.from({ length: area()});

  const handleContexMenu = (event) => {
       
    let xCoordinate
    let yCoordinate

    width - event.clientX < 166
    ? xCoordinate = event.clientX - 166
    : xCoordinate = event.clientX

    height - event.clientY < 32
    ? yCoordinate = event.clientY - 32
    : yCoordinate = event.clientY

    setOpenColorPicker(true)
    setAnchorPoint({ x: xCoordinate, y: yCoordinate });
  }

  const handleOnMouseDown = (event) => {
  
    event.buttons === 1 && setHoldingClick(true)          
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
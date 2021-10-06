import './Pixel.css';
import { useState } from 'react';

const Pixel = (props) => {
  
  const {currentColor, holdingClick, setAnchorPoint, setOpenColorPicker} = props;
  const [pixelColor, setPixelColor] = useState('#FFFFFF');
  const [painted, setPainted] = useState(false);
  
  const stylePixel = {
    backgroundColor : pixelColor
  }
  
  const applyColor = (boolean) => {
   
    setPainted(boolean)
    setPixelColor(currentColor)    
  }

  const handleContexMenu = (event) => {
    
    event.preventDefault()
    setOpenColorPicker(true)
    setAnchorPoint({ x: event.clientX, y: event.clientY });
  }
  
  return (
    <div 
      className='pixel'
      style={painted ? stylePixel : null}
      onClick={() => applyColor(!painted)}
      onMouseMove={(holdingClick ? () => applyColor(true) : null)}
      onContextMenu={handleContexMenu} 
    />
  );
};

export default Pixel;
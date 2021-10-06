import './Pixel.css';
import { useState } from 'react';

const Pixel = (props) => {
  
  const {currentColor, holdingClick} = props;
  const [pixelColor, setPixelColor] = useState('#FFFFFF');
  const [painted, setPainted] = useState(false);
  
  const stylePixel = {
    backgroundColor : pixelColor
  }
  
  const applyColor = (boolean) => {
   
    setPainted(boolean)
    setPixelColor(currentColor)    
  }

  return (
    <div 
      className='pixel'
      style={painted ? stylePixel : null}
      onClick={() => applyColor(!painted)}
      onMouseMove={(holdingClick ? () => applyColor(true) : null)}
    />
  );
};

export default Pixel;
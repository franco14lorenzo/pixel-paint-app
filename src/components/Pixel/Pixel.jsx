import './Pixel.css';
import { useState } from 'react';

const Pixel = (props) => {
  
  const {holdingClick} = props;
  const [painted, setPainted] = useState(false);
  const stylePixel = {
    background : '#000000'
  };
  
  return (
    <div 
      id="pixel" 
      onClick={() => setPainted(!painted)}
      onMouseMove={(() => holdingClick ? setPainted(true) : null)} 
      style={painted ? stylePixel : null}
    />
  );
};

export default Pixel;
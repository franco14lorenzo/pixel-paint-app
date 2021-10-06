import './App.css';
import { useState } from 'react';
import Display from './components/Display/Display';
import ColorPicker from './components/ColorPicker/ColorPicker';

const App = () => { 

  const [currentColor, setCurrentColor] = useState('#000000');
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  
  return (

    <div className='app'>

      <Display 
        currentColor={currentColor} 
        setOpenColorPicker={setOpenColorPicker} 
        setAnchorPoint={setAnchorPoint}
      />

      {openColorPicker 
        ? <ColorPicker 
            style={{top: anchorPoint.y, left: anchorPoint.x}}
            currentColor={currentColor} 
            setCurrentColor={setCurrentColor} 
            setOpenColorPicker={setOpenColorPicker} 
          /> 
        : null
      }
      
    </div>
  );
}

export default App;

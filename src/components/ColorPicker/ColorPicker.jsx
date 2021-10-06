import './ColorPicker.css';
import ColorBox from '../ColorBox/ColorBox';

const ColorPicker = (props) => {
  
  const {setOpenColorPicker, setCurrentColor, style} = props; 
  const colorsArray = ['#000000', '#FF00FF', '#FF7578', '#876FFF', '#FCFF6A', '#4AFFFF'];

  return(
    
    <div id='color-picker' style={style} onMouseLeave={()=>setOpenColorPicker(false)}>

      { colorsArray
        .map((color, index) => {
        
          const colorStyle = { backgroundColor: color }
                  
          return (
            <ColorBox 
              key={index} 
              id={`box-${index}`} 
              style={colorStyle} 
              setCurrentColor={setCurrentColor}
              setOpenColorPicker={setOpenColorPicker}
            />
          )
        })
      } 

    </div>
  );
}

export default ColorPicker;
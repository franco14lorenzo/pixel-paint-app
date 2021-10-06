import './ColorBox.css';

const ColorBox = (props) => {
   
  const {id, style, setCurrentColor, setOpenColorPicker} = props;

  const selectColor = (id) => {
  
    switch (id) {
      case "box-0":
        setCurrentColor('#000000');
        setOpenColorPicker(false);
        break;
      case "box-1":
        setCurrentColor('#FF00FF');
        setOpenColorPicker(false);
      break;
      case "box-2": 
        setCurrentColor('#FF7578');
        setOpenColorPicker(false);
      break;
      case "box-3":
        setCurrentColor('#876FFF');
        setOpenColorPicker(false);
      break;
      case "box-4":
        setCurrentColor('#FCFF6A');
        setOpenColorPicker(false);
      break;
      case "box-5":
        setCurrentColor('#4AFFFF');
        setOpenColorPicker(false);
      break;
      default:
      return;
    }
  }
  
  return (
    <div
      className="color-box" 
      id={id} 
      style={style}
      onClick={(event) => selectColor(event.target.id)}
    />
  )
};

export default ColorBox;
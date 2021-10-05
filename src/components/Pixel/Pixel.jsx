import './Pixel.css'
import { useState } from 'react';

const Pixel = () => {
    const [painted, setPainted] = useState(false);
    
    return <div id="pixel"></div>
}

export default Pixel;
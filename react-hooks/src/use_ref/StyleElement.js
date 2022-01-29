import React, {useRef, useEffect} from 'react';

const StyleElement = () => {
  
  const colorParagraph = useRef(null); // colorParagraph = {current: null}
  const colors = ['#d529d0', '#03a9f4', '#d14614fa', '#d51858', '#9c27b0', '#ffc107', '#ff5722', '#61dafb', '#4caf50', '#07600a', '#65e96a'];

  useEffect(() => {
    console.log(colorParagraph);
    console.log(colorParagraph.current);
  });

  const styleParagraph = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    colorParagraph.current.style.color = colors[randomColor];
  }

  return (
    <div>
      <button onClick={() => {styleParagraph()}}>Click me!</button>
      <p ref={colorParagraph}>Welcome back to the channel</p>  {/* colorParagraph = {current: p} */}
    </div>
  )
};

export default StyleElement;
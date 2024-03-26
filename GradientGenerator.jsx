// GradientGenerator.js
import React, { useState } from 'react';
import GradientPreview from './GradientPreview';
import ColorPicker from './ColorPicker';
import RandomGradientButton from './RandomGradientButton';
import CopyColorButton from './CopyColorButton';

function GradientGenerator() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const setRandomGradient = () => {
    setColor1(generateRandomColor());
    setColor2(generateRandomColor());
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="gradient-generator" style={{ backgroundColor }}>
      <GradientPreview color1={color1} color2={color2} />
      <ColorPicker color={color1} onChange={setColor1} />
      <ColorPicker color={color2} onChange={setColor2} />
      <RandomGradientButton onClick={setRandomGradient} />
      <CopyColorButton colors={[color1, color2]} label="Copy Colors" />
    </div>
  );
}

export default GradientGenerator;

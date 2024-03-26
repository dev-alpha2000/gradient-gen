// CopyColorButton.js
import React from 'react';

function CopyColorButton({ colors, label }) {
  const copyColors = () => {
    const colorsText = colors.join(', ');
    navigator.clipboard.writeText(colorsText);
    alert('Colors copied to clipboard!');
  };

  return (
    <button onClick={copyColors}>{label}</button>
  );
}

export default CopyColorButton;

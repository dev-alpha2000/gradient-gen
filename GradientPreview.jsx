// GradientPreview.js
import React from 'react';

function GradientPreview({ color1, color2 }) {
  return (
    <div className="gradient-preview" style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}></div>
  );
}

export default GradientPreview;

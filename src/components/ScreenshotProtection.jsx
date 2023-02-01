import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

function ScreenshotProtection() {
  const [isScreenshotTaken, setIsScreenshotTaken] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const handleKeydown = (event) => {
    //Check if the user has pressed the print screen key
    if (event.keyCode === 44) {
      // Use html2canvas to take a screenshot of the current page
      html2canvas(document.body).then((canvas) => {
        // Check if the image data has been generated
        if (canvas.toDataURL().length > 0) {
          setIsScreenshotTaken(true);
          setTimeout(() => setIsScreenshotTaken(false), 3000);
        }
      });
    }
  };

  return (
    <div>
      {isScreenshotTaken ? (
        <div style={{ background: 'black', width: '100%', height: '100%' }} />
      ) : (
        <img src="https://random.imagecdn.app/500/150" width="100%" height="100%" alt="image screenshot" />
      )}
    </div>
  );
}

export default ScreenshotProtection;

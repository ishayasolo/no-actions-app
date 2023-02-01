import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from './components/Image';
import NoHighlight from './components/NoHighlight';
import Paragraph from './components/Paragraph';
import video from './assets/teddys-tale.mp4'

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=6', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key':
          'live_MANoUYrTHTy6xlgtJbWvKzoVCgd24aHoZAHZ8yM2MEcCEqqlawWtovUCjVbqbcZx',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setImages(data);
      });
  }, []);

  const handleContextMenu = event => {
    event.preventDefault();
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2>You can highlight the text below but you can't copy</h2>
      <Paragraph />

      <br />

      <NoHighlight>
        <h2>You can't highlight or copy the text below</h2>
        <Paragraph />
      </NoHighlight>

      <br />

      <h2>You can't perform any click actions on the below images</h2>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          pointerEvents: 'none',
          maxWidth: '600px',
        }}
      >
        {images.map(image => (
          <div
            key={image.id}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '6px',
            }}
          >
            <Image
              src={image.url}
              alt="a cat image"
            />
          </div>
        ))}
      </div>
      <h2>You can't download or right-click on the video below</h2>
      <div onContextMenu={handleContextMenu}>
        <video src={video} style={{
          width: '100%',
          maxWidth: "400px",
          borderRadius: '8px'
        }} controls controlsList="nodownload"></video>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from './components/Image';
import NoHighlight from './components/NoHighlight';
import Paragraph from './components/Paragraph';

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
    <div style={{ padding: '16px', maxWidth: '600px' }}>
      <h2 style={{ lineHeight: '1.5' }}>
        You can highlight the text below but you can't copy any of it's content
      </h2>
      <Paragraph />

      <br />

      <NoHighlight>
        <h2 style={{ lineHeight: '1.5' }}>
          You can't highlight or copy the text below
        </h2>
        <Paragraph />
      </NoHighlight>

      <br />

      <h2 style={{ lineHeight: '1.5' }}>
        You can't download or perform any click actions on the images below
      </h2>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          pointerEvents: 'none',
          maxWidth: '600px',
        }}
      >
        {images.map((image, index) => (
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
              alt={`cat image number ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <br />

      <h2 style={{ lineHeight: '1.5' }}>
        You can't download or right-click on the video below
      </h2>
      <div onContextMenu={handleContextMenu}>
        <video
          src="https://demo-video-stream.vercel.app/videos/test.mp4"
          loop
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '8px',
          }}
          controls
          controlsList="nodownload"
        ></video>
      </div>

      <br />

      <p style={{ lineHeight: '1.5', fontWeight: 'bold' }}>
        PS: right-click is also disabled on the entire page, to prevent the user
        from accessing the page options
      </p>
    </div>
  );
}

export default App;

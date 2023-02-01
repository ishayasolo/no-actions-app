import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from './components/Image';
import NoHighlight from './components/NoHighlight';
import Paragraph from './components/Paragraph';
import video from './assets/teddys-tale.mp4';

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
        <video
          src="https://rr1---sn-huoob-avnl.googlevideo.com/videoplayback?expire=1675291341&ei=bZbaY_2kNqKpobIPyt6XoAU&ip=168.232.160.14&id=o-AGSsUA8lquz8haNcG8jQIE8sPiZdEDLnEw2YNqkF4f2U&itag=18&source=youtube&requiressl=yes&spc=H3gIhnC-EEnkWShhXTwyi6SNvcxA1o4&vprv=1&mime=video%2Fmp4&ns=sMGnomxENuQCIKKtv6xeUmcL&gir=yes&clen=43311040&ratebypass=yes&dur=615.125&lmt=1669347190111837&fexp=24007246,24462247&beids=24462247&c=WEB&txp=5530434&n=WtdDWELuNCJGYg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJAgKsksq1VA0xKDt0Uk03ubP7LLYyGXG7aIQlY946ttAiEAqJ9s_hlQWK8vxvhbuHDw00_FmFLMAF4jaUrDHh0gYWc%3D&redirect_counter=1&rm=sn-bg0yd76&req_id=85adf74cc034a3ee&cms_redirect=yes&ipbypass=yes&mh=BE&mip=102.89.44.252&mm=31&mn=sn-huoob-avnl&ms=au&mt=1675278339&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgSLNIg3PKWamiaLnFmvHvJAXVOqpccVsC4n5yu9BLElMCIQDeR70nmEPmTp7-EWxIRpOg6YrVFWiMTBistJ48C5t0Bw%3D%3D"
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
    </div>
  );
}

export default App;

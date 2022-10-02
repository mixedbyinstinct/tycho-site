import React from 'react';
import styled, { keyframes } from 'styled-components';
import cover1 from '../143 cover.png';
import cover2 from '../Pt 1 cover.png';
import cover3 from '../Pt 2 cover.png';
import { Button } from '../styles/App.styled';
import appleLogo from '../music.png';
import spotifyLogo from '../spotify.png';

const Dissolve = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1;
}
`;

const Overlay = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-content: center;
align-items: center;
flex-shrink: 2;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
border-radius: 7.5px;
opacity: 0;
transition: .5s ease;
background-color: #0a0e38;
& button {
  background-color: transparent;
  border: none;
  margin: 0.3px;
  padding: 6px;
  color: #fdfdfd;
  height: 60px;
  width: 60px;
}
& img {
    height: 36px;
    width: 36px%;
    filter: invert(100%) sepia(0%) saturate(106%) hue-rotate(191deg) brightness(113%) contrast(98%) drop-shadow(0 0 2px #e4e4e4);
  }
`;


const ArtGrid = styled.div`
display: flex; flex-flow: column nowrap;
justify-content: space-evenly; align-content: space-evenly;
padding: 8px;
animation: ${Dissolve} .4s linear;
& h3 {
  color: #333333;
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 3px;
  font-family: 'heading';
}
`;

const ArtRow = styled.div`
display: flex; flex-flow: row nowrap;
justify-content: space-evenly; align-content: space-evenly;
`;

const ArtBox = styled.div`
display: flex;
justify-content: center; align-content: center;
padding: 5px;
border-radius: 7.5px;
height: 120px;
width: 120px;
position: relative;
background: none;
& img {
  height: 100%;
  width: 100%;
  border-radius: 7.5px;
}
animation: ${Dissolve} 1s ease-in;
&:hover ${Overlay} {
    opacity: 0.97;
  }
`;

const Art = () => {
  return(
    //TODO: serve album arts from backend
    <ArtGrid>
    <h3>Spotify</h3>
    <ArtRow>
    <ArtBox>
    <img src={cover1} alt="143" />
    <Overlay>
    <button onClick={() => window.open('https://open.spotify.com/album/7BA30stGZPngsjfKb4U0oO?si=bx5g5L9CQ0yPHKLFcyDZZw')}><img src={spotifyLogo} alt="spotify" /></button>
    </Overlay>
    </ArtBox>
    <ArtBox>
    <img src={cover2} alt="pt1" />
    <Overlay>
    <button onClick={() => window.open('https://open.spotify.com/album/3IBIjA3vF1G2QrwwOTtQhS?si=qMXDDpZAQqSQfrxq_V29Gw')}><img src={spotifyLogo} alt="spotify" /></button>
    </Overlay>
    </ArtBox>
    <ArtBox>
    <img src={cover3} alt="pt cruisuer" />
    <Overlay>
    <button onClick={() => window.open('https://open.spotify.com/album/1KSj4fuE8F4l2JmLobqyZR?si=sDKpaRKMSdWGhowdpfPTew')}><img src={spotifyLogo} alt="spotify" /></button>
    </Overlay>
    </ArtBox>
    </ArtRow>
    <h3>Apple Music</h3>
    <ArtRow>
    <ArtBox>
    <img src={cover1} alt="143" />
    <Overlay>
    <button onClick={() => window.open('https://music.apple.com/us/album/the-143-algorhythm-ep/1646883421')}><img src={appleLogo} alt="spotify" /></button>
    </Overlay>
    </ArtBox>
    <ArtBox>
    <img src={cover2} alt="pt1" />
    <Overlay>
    <button onClick={() => window.open('https://music.apple.com/us/album/tycho-cassini-meets-tycho-44-pt-1-ep/1646829306')}><img src={appleLogo} alt="spotify" /></button>
    </Overlay>
    </ArtBox>
    <ArtBox>
    <img src={cover3} alt="pt cruisuer" />
    <Overlay>
    <button onClick={() => window.open('https://music.apple.com/us/album/tycho-cassini-meets-tycho-44-pt-2-ep/1646820010')}><img src={appleLogo} alt="spotify" /></button>
    </Overlay>
    </ArtBox>
    </ArtRow>
    </ArtGrid>
  );
}

export default Art;
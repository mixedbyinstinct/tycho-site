import React from 'react';
import styled from 'styled-components';
import ig from '../instagram-logo.png';
import tiktok from '../tik-tok.png';

const SocialContainer = styled.div`
display: flex; flex-flow: column nowrap;
justify-content: center; align-items: center;
padding: 8px;
`;

const SocialButton = styled.button`
height: 100px; width: 100px;
display: flex; flex-flow: column nowrap;
justify-content: center; align-items: center;
padding: 8px;
& img {
  height: 75%; width: 75%;
  background: none;
}
background-color: #73f48b;
border-radius: 50%;
margin-bottom: 6px;
`;

const Socials = () => {
  return(
    <SocialContainer>
      <SocialButton onClick={() => window.open('https://www.tiktok.com/@tycho.44?_t=8W6MlmYhlG6&_r=1')}>
        <img src={tiktok} alt='tiktok' />
      </SocialButton>
      <SocialButton onClick={() => window.open('https://instagram.com/tycho.44?igshid=Y2ZmNzg0YzQ=')}>
        <img src={ig} alt='ig' />
      </SocialButton>
    </SocialContainer>
  );
}

export default Socials;
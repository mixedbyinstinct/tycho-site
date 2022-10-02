import styled, { createGlobalStyle, keyframes} from 'styled-components';
import heading from '../Syne-ExtraBold.ttf';
import buttons from '../Syne-Regular.ttf';
import text from '../Barlow-Medium.otf';

const Dissolve = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1;
}
`;

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'heading';
  src: url(${heading}) format('truetype');
}
@font-face {
  font-family: 'buttons';
  src: url(${buttons}) format('truetype');
}
@font-face {
  font-family: 'text';
  src: url(${text}) format('opentype');
}
body {
  background-color: #fdfdfd;
  & h1 {
    font-family: 'heading';
  }
  & p {
    font-family: 'text';
  }
  & h2 {
    font-family: 'heading';
  }
}
`;

export const Separator = styled.div`
width: 100%; height: 2px;
border-radius: 3px;
background-color: #808480;
margin-top: 5px; margin-bottom: 5px;
`

export const Jumbotron = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column nowrap;
background-color: #212021;
& h1 {
  color: #fdfdfd;
  font-size: 28px;
}
& img {
  height: 250px;
  width: 200px;
  border-radius: 7.5px;
}
height: 50vh;
width: 85vw;
border-radius: 15px;
padding: 15px;
`;

export const ArtHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column nowrap;
background-color: #b1b1b1;
flex-shrink: 1;
& h1 {
  color: #fdfdfd;
  font-size: 28px;
}
height: 55vh;
width: 85vw;
border-radius: 15px;
margin-left: 15vw; margin-right: 15vw;
padding: 25px;
`;

export const Button = styled.button`
display: flex;
justify-content: center; align-items: center;
padding: 8px;
font-family: 'buttons';
font-size: 18px;
background-color: #4750a2;
color: #212021;
border: none;
border-radius: 4px;
height: 40px;
`;

export const Header = styled.div`
display: flex; flex-flow: row nowrap;
background-color: #010101;
height: 30px;
width: 100vw;
border: 1px solid #cacaca;
padding: 15px;
& p {
  font-size: 13px;
  color: #fdfdfd;
}
& ${Button} {
  background-color: transparent; color: #fdfdfd;
  position: absolute; right: 5px;
}
`;

export const Container = styled.div`
display: flex; flex-flow: column nowrap;
align-items: center; justify-content: center;
padding: 8px;
position: relative;
& h2 {
  font-size: 26px;
  color: #191919;
}
`;

export const Text = styled.div`
& p {
  font-size: 14px;
  color: #4d4d4d;
}
`

export const Menu = styled.div`
display: flex; flex-flow: column nowrap;
align-items: center; justify-content: center;
background-color: rgba(202, 202, 202, 0.96);
& ${Button} {
  font-size: 14px;
  background: none;
  border-top: 1px solid #010101; border-bottom: 1px solid #010101;
  width: 100%; height: 30px;
  text-align: center;
  margin-bottom: 5px; margin-top: 5px;
  padding: 6px;
  border-radius: 0px;
}
& ${Button}:hover {
  background-color: #212021;
  color: #fdfdfd;
  transition: 0.2s ease-in;
}
height: 75vh; width: 96vw;
position: absolute;
top: 10%;
animation: ${Dissolve} .5s ease-in;
`

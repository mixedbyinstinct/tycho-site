import React, { useState, useRef }from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle, keyframes} from 'styled-components';
import heading from './Syne-ExtraBold.ttf';
import buttons from './Syne-Regular.ttf';
import text from './Barlow-Medium.otf';
import tychoFace from './IMG_2489.jpg';

const Dissolve = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1;
}
`

const GlobalStyle = createGlobalStyle`
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



const Jumbotron = styled.div`
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

const Button = styled.button`
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

const Header = styled.div`
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
}
`;

const Container = styled.div`
display: flex; flex-flow: column nowrap;
align-items: center; justify-content: center;
padding: 8px;
position: relative;
`;

const Text = styled.div`
& p {
  font-size: 14px;
  color: #4d4d4d;
}
`

const Menu = styled.div`
display: flex; flex-flow: column nowrap;
align-items: center; justify-content: center;
background-color: rgba(202, 202, 202, 0.8);
& ${Button} {
  font-size: 14px;
  background: none;
  border-top: 1px solid #010101; border-bottom: 1px solid #010101;
  width: 100%; height: 30px;
  text-align: center;
  padding: 6px;
  border-radius: 0px;
}
& ${Button}:hover {
  background-color: #212021;
  color: #fdfdfd;
  transition: 0.5s ease-in;
}
height: 75vh; width 85vw;
position: absolute;
top: 18%;
animation: ${Dissolve} 1s ease-in;
`

const MenuScreen = () => {
  return (
    <Menu>
    <Button>About</Button>
    <Button>Socials</Button>
    <Button>News</Button>
    <Button>Music</Button>
    </Menu>
  )
}

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
    <GlobalStyle />
    <Container>
    {showMenu ? <MenuScreen /> : <div />}
    <Jumbotron>
    <h1>Tycho</h1>
    <img src={tychoFace} alt ="tycho" />
    </Jumbotron>
    <Header>
    <p>Menu</p>
    <Button onClick={toggleMenu}>Click</Button>
    </Header>
    <Text>
    <p>lorem ipsum is some random bullshit, I just need to test this color and font rq</p>
    </Text>
    <Button>Imma Button</Button>
    </Container>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

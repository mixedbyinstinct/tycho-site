import React, { useState, useRef }from 'react';
import ReactDOM from 'react-dom';
import tychoFace from './IMG_2489.jpg';
import About from './components/about.jsx';
import { Container, Header, Menu, Button, Jumbotron, GlobalStyle, Text } from './styles/App.styled';

const App = () => {
  const bioRef = useRef(null);
  const newsRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
    const [showBio, setShowBio] = useState(false);
    
 const MenuScreen = () => {
  return (
    <Menu>
    <Button onClick={toggleBio}>About</Button>
    <Button>Socials</Button>
    <Button onClick={toggleNews}>News</Button>
    <Button>Music</Button>
    </Menu>
  )
}

    async function toggleBio(){
      setShowMenu(false);
      await setShowBio(true);
      bioRef.current.scrollIntoView();
    }
    
    async function toggleNews() {
      await setShowMenu(false);
      newsRef.current.scrollIntoView();
    }
    
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
    <Container ref={newsRef}>
    <h2>News</h2>
    <Text>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam diam, porttitor sit amet lobortis at, hendrerit eu lorem. Fusce dolor nunc, porta in commodo non, vulputate in dui. In diam nisi, aliquet et euismod vestibulum, vestibulum sit amet elit. Sed facilisis, metus nec cursus aliquet, erat libero congue sapien, sed suscipit nisi massa bibendum justo. Suspendisse sed aliquam urna. Praesent interdum magna non dignissim semper. Nunc ac elementum ligula. Donec convallis nec elit nec facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet tortor a risus finibus tincidunt et in lacus. Nullam gravida viverra tempus. Suspendisse interdum ipsum at nulla semper volutpat.</p>
    </Text>
    </Container>
    <Container ref={bioRef}>
    {showBio ? <About /> : <div />}
    </Container>
    </Container>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

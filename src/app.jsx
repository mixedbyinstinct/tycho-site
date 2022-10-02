import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import tychoFace from './IMG_2489.jpg';
import About from './components/about.jsx';
import Art from './components/art.jsx';
import { Container, Header, Menu, Button, Jumbotron, GlobalStyle, Text, Separator, ArtHeader } from './styles/App.styled';
import axios from 'axios';

const App = () => {
  const bioRef = useRef(null);
  const newsRef = useRef(null);
  const artRef = useRef(null);
  
  const [showMenu, setShowMenu] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showArt, setShowArt] = useState(false);
  const [newsText, setNewsText] = useState('');
  
  
    
 const MenuScreen = () => {
  return (
    <Menu>
    <Button onClick={toggleBio}>About</Button>
    <Button>Socials</Button>
    <Button onClick={toggleNews}>News</Button>
    <Button onClick={toggleArt}>Music</Button>
    </Menu>
  )
}

    async function toggleBio(){
      await setShowBio(true);
      setShowMenu(false);
      bioRef.current.scrollIntoView();
    }
    
    async function toggleNews() {
      await setShowMenu(false);
      newsRef.current.scrollIntoView();
    }
    
    async function toggleArt(){
      await setShowArt(true);
      setShowMenu(false);
      artRef.current.scrollIntoView();
    }
    
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  
  useEffect(() => {
    // TODO: news specific API route
    axios.get('/bio').then(({data}) => {
      setNewsText(data)
    })
  }, [])
  
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
    <p>{newsText}</p>
    </Text>
    <Separator />
    </Container>
    <Container ref={bioRef}>
    {showBio ? <About /> : <div />}
    {showBio ? <Separator /> : <div />}
    </Container>
    <div ref={artRef}>
    {showArt ? <ArtHeader>
    <h2>Music</h2>
    <Art />
    </ArtHeader> : <div />}
    </div>
    </Container>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

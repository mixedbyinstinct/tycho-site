import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import tychoFace from './Tycho_update_photo.jpg';
import About from './components/about.jsx';
import Art from './components/art.jsx';
import { Container, ScrollContainer, Header, Menu, Button, Jumbotron, GlobalStyle, Text, Separator, ArtHeader, MenuButton } from './styles/App.styled';
import axios from 'axios';
import Socials from './components/socials.jsx';

const App = () => {
  const bioRef = useRef(null);
  const newsRef = useRef(null);
  const artRef = useRef(null);
  const socialsRef = useRef(null);
  
  const [showMenu, setShowMenu] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showArt, setShowArt] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [debugText, setDebugText] = useState('');
  const [showSocials, setShowSocials] = useState(false);
  
    
 const MenuScreen = () => {
  return (
    <Menu>
    <Button onClick={toggleBio}>About</Button>
    <Button onClick={toggleSocials}>Socials</Button>
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
    
    async function toggleSocials(){
      await setShowSocials(true);
      setShowMenu(false);
      socialsRef.current.scrollIntoView();
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
  
  const renderNewsData = () => {
    return newsData.map((item, index) => {
      const { Id, Headline, Content } = item;
      return (
               <div key={Id}>
                 <h2>{Headline}</h2>
                 <p>{Content}</p>
               </div>
             );
    })
  }
  
  useEffect(() => {
    axios.get('/news').then(({data}) => {
      data.success ? setNewsData(data.newsData) :
      setDebugText(data.message);
    })
  }, [])
  
  return (
    <>
    <GlobalStyle />
    <Container>
      {showMenu ? <MenuScreen /> : <div />}
      <Jumbotron onClick={() => setShowMenu(false)}>
        <h1>Tycho</h1>
        <img src={tychoFace} alt ="tycho" />
      </Jumbotron>
      <Header>
        <Button onClick={toggleMenu}> Main Menu</Button>
      </Header>
      <h2>News</h2>
      <ScrollContainer ref={newsRef} onClick={() => setShowMenu(false)}>
        <Text>
          {renderNewsData()}
        </Text>
        <Separator />
      </ScrollContainer>
      <h2>Bio</h2>
      <ScrollContainer ref={bioRef} onClick={() => setShowMenu(false)}>
        {showBio ? <About /> : <div />}
        {showBio ? <Separator /> : <div />}
      </ScrollContainer>
      <div ref={artRef}>
        {showArt ? <ArtHeader>
          <h2>Music</h2>
          <Art />
        </ArtHeader> : <div />}
      </div>
      <div ref={socialsRef}>
        {showSocials ?
          <>
          <h2>Social Media</h2>
          <Socials />
          </> : <div />}
        </div>
      <p>{debugText}</p>
    </Container>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

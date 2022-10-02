import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AboutContainer = styled.div`
display: flex; flex-flow: column nowrap;
justify-content: center; align-items: center;
& h2 {
  font-size: 26px;
  color: #191919;
}
& p {
  text-align: center;
  font-size: 14px;
  color: #4d4d4d;
}
`;

const About = () => {
  const [bioText, setBioText] = useState('');
  
  useEffect(() => {
    axios.get('/bio').then(({data}) => {
      setBioText(data);
    })
  }, [])
  
  return (
    <AboutContainer>
    <h2>Bio</h2>
    <p>{bioText}</p>
    </AboutContainer>
  );
}

export default About;
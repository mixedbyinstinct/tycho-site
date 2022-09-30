import React from 'react';
import styled from 'styled-components';

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
  return (
    <AboutContainer>
    <h2>Bio</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam diam, porttitor sit amet lobortis at, hendrerit eu lorem. Fusce dolor nunc, porta in commodo non, vulputate in dui. In diam nisi, aliquet et euismod vestibulum, vestibulum sit amet elit. Sed facilisis, metus nec cursus aliquet, erat libero congue sapien, sed suscipit nisi massa bibendum justo. Suspendisse sed aliquam urna. Praesent interdum magna non dignissim semper. Nunc ac elementum ligula. Donec convallis nec elit nec facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet tortor a risus finibus tincidunt et in lacus. Nullam gravida viverra tempus. Suspendisse interdum ipsum at nulla semper volutpat.</p>
    </AboutContainer>
  );
}

export default About;
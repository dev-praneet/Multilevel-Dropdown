import React from 'react';
import styled from 'styled-components';

// components
import FirstFormComponent from './components/firstFormComponent/FirstFormComponent';
import SecondFormComponent from './components/secondFormComponent/SecondFormComponent';
import { GlobalStyle } from './GlobalStyle';


const Wrapper = styled.div`
  background-color: hsl(0, 0%, 93%);
`;

const Container = styled.div`
  max-width: min(90%, 600px);
  margin: 0 auto;
  background-color: hsl(0deg, 0%, 93%);
`;



function App() {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <FirstFormComponent />
        <SecondFormComponent />
      </Container>
    </Wrapper>
  );
}

export default App;
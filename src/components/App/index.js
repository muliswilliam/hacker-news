import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import { Wrapper, Title } from 'components/App/styles';
import List from '../List';

function App() {
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>Hackers News Reader</Title>
          <List/>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;

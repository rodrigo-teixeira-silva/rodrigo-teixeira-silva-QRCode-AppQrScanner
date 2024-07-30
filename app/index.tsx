import React from 'react';
import QRScanner from './Scanner/QRScanner';
import styled from 'styled-components/native';

const App: React.FC = () => {
  return (
    <Container>
      <QRScanner />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default App;

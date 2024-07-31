import React from 'react';
import QRScanner from './QRScanner';
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
  background-color: #1e293b;
`;

export default App;

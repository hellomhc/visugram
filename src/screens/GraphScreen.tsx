import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: blue;
`;

const GraphScreen: React.FC = () => {
  return (
    <StyledView>
      <Text>Hello GraphScreen!</Text>
    </StyledView>
  );
};

export default GraphScreen;

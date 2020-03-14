import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: #6B62FA;
`;

const SortScreen: React.FC = () => {
  return (
    <StyledView>
      <Text>Hello SortScreen!</Text>
    </StyledView>
  );
};

export default SortScreen;

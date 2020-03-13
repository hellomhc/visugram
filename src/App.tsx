import {registerRootComponent} from 'expo';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {View} from 'react-native';

const StyledView = styled.View`
  background-color: blue;
`;

const App: React.FC = () => {
  return (
    <StyledView>
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
      <Text>React Native</Text>
    </StyledView>
  );
};

registerRootComponent(App);

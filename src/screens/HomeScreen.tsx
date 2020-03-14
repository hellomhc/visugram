import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Alert, Button, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justifyContent: 'center';
  alignItems: 'center';
  backgroundColor: '#FFEB3B';
  padding: 30px 10px 0;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
const StyledButton = styled.Button``;
const StyledView2 = styled.View`
  margin: 5px;
  border-radius: 6px;
  background-color: red;
  overflow: hidden;
`;
const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StyledView>
        <Title>Algorithm</Title>
        <StyledView2>
          <StyledButton
            title='Asymptotic Notation'
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </StyledView2>
        <StyledView2>
          <StyledButton
            color='red'
            title='Sort'
            onPress={() => navigation.navigate('Sort')}
          />
        </StyledView2>
        <StyledView2>
          <StyledButton
            title='Graph'
            onPress={() => navigation.navigate('Graph')}
          />
        </StyledView2>
      </StyledView>
    </SafeAreaView>
  );
};

export default HomeScreen;

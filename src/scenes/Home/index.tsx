import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Text } from 'react-native';
import Button from '~/components/Button';
import { Description, Header, TextSpan, Title, Wrapper } from './styles';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <Wrapper>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <Header>
        <Title>Morning, Hiago</Title>
        <Description>
          <TextSpan>3 tasks</TextSpan> are waiting for you today
        </Description>
      </Header>
    </Wrapper>
  );
};

export default Home;

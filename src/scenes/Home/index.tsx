import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import {
  Avatar,
  Content,
  Description,
  Header,
  TextSpan,
  Title,
  Wrapper,
} from './styles';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <Wrapper>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <Header>
        <Content>
          <Title>Morning, Hiago</Title>
          <Description>
            <TextSpan>3 tasks</TextSpan> are waiting for you today
          </Description>
        </Content>

        <Avatar />
      </Header>
    </Wrapper>
  );
};

export default Home;

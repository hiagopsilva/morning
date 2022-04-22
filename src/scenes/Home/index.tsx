import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import {
  Avatar,
  Calendar,
  Content,
  ContentCalendar,
  ContentDays,
  Description,
  Header,
  MonthText,
  NumberDay,
  TextDay,
  TextSpan,
  Title,
  TitleCalendar,
  Wrapper,
  WrapperDay,
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

      <Calendar>
        <ContentCalendar>
          <TitleCalendar>Days</TitleCalendar>
          <MonthText>Abril</MonthText>
        </ContentCalendar>

        <ContentDays>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <WrapperDay active={item === 1}>
              <TextDay active={item === 1}>MON</TextDay>
              <NumberDay active={item === 1}>{item}</NumberDay>
            </WrapperDay>
          ))}
        </ContentDays>
      </Calendar>
    </Wrapper>
  );
};

export default Home;

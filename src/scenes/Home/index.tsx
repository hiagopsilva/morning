import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import {
  Avatar,
  Calendar,
  CheckTask,
  Content,
  ContentCalendar,
  ContentDays,
  Description,
  Header,
  ListTasks,
  MonthText,
  NewTask,
  NumberDay,
  Options,
  Task,
  TextDay,
  TextInput,
  TextOptions,
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
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

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

      <Options>
        <TextOptions first active>
          Pending
        </TextOptions>
        <TextOptions>Completed</TextOptions>
      </Options>

      <NewTask>
        <TextInput new placeholder="Write a new task here...." />
      </NewTask>

      <ListTasks>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
        <Task>
          <CheckTask />
          <TextInput placeholder="Lorem ipsum csacascacsac ccsac cascas cascas cascas" />
        </Task>
      </ListTasks>
    </Wrapper>
  );
};

export default Home;

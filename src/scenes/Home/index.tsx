import React, { FC } from 'react';
import { Text } from 'react-native';
import Button from '~/components/Button';
import { Wrapper } from './styles';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <Wrapper>
      <Text>HOME</Text>
      <Button />
    </Wrapper>
  );
};

export default Home;

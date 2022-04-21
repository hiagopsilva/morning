import { inject, observer } from 'mobx-react';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { RoutesPrivate } from '~/routes';

import { Wrapper } from './styles';

type Props = {
  routing: RoutingType;
};

const Welcome: FC<Props> = ({ routing }) => {
  return (
    <Wrapper>
      <Text onPress={() => routing.inPrivate(RoutesPrivate.HOME)}>
        Scene WELCOME
      </Text>
    </Wrapper>
  );
};

export default inject('routing', 'user')(observer(Welcome));

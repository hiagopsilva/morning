import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '~/scenes';
import { RoutesPrivate } from './routing';

const Private = createStackNavigator();

const PrivateStack = (): React.ReactElement => (
  <Private.Navigator headerMode="none" initialRouteName={RoutesPrivate.HOME}>
    <Private.Screen name={RoutesPrivate.HOME} component={Home} />
  </Private.Navigator>
);

export default PrivateStack;

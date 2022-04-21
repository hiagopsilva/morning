import React from 'react';
import { inject, observer } from 'mobx-react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routing, { setTopLevelNavigator } from './actions';
import PublicStack from './public.stack';
import PrivateStack from './private.stack';
import { RoutesPrivate, RoutesPublic, StacksRoutes } from './routing';

const MainStack = createStackNavigator();

type Props = {
  token: boolean;
};

const Navigation = ({ token }: Props): React.ReactElement => {
  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <MainStack.Navigator
        headerMode="none"
        mode="modal"
        initialRouteName={token ? StacksRoutes.PRIVATE : StacksRoutes.PUBLIC}
      >
        <MainStack.Screen
          name={StacksRoutes.PRIVATE}
          component={PrivateStack}
        />
        <MainStack.Screen name={StacksRoutes.PUBLIC} component={PublicStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export { routing, RoutesPrivate, RoutesPublic, useRoute };
export default inject('app')(observer(Navigation));

import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import '~/utils/config/reactotron';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import store from '~/stores';
import { colors, fonts, radius, spacings } from '~/theme';
import { AlertMessage } from '~/utils';
import Navigation, { routing } from '~/routes';
import '~/utils/helpers/icons';
import { Home } from './scenes';

const theme = { ...colors, ...spacings, ...radius, ...fonts };
const stores = { ...store, routing };

export default function App(): React.ReactElement {
  const [token, setToken] = useState<boolean>(false);

  return (
    <Provider {...stores}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#9A01FE" />

        <Navigation token={token} />
        <AlertMessage />
      </ThemeProvider>
    </Provider>
  );
}

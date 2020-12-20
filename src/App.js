import React from 'react';
import Amplify from 'aws-amplify';
import config from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// need to improve login/signup styling
// import AmplifyTheme from 'aws-amplify-react-native/src/AmplifyTheme';

import RootNavigator from './Components/RootNavigator';

Amplify.configure(config);

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#44bcd8',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <RootNavigator/>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
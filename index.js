import { AppRegistry, LogBox } from 'react-native';

import App from './src/App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  'Possible Unhandled Promise Rejection',
  'Remote debugger',
]);

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);

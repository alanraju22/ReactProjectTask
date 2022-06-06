/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './Home';
import FetchAPIExample from './FetchAPIExample';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);

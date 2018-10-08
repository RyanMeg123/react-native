/** @format */

import {AppRegistry} from 'react-native';
import Index from './app/index';
import Register from './app/register';
import Login from './app/login';
import Forget from './app/forgetPwd';
import Search from './app/search';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Search);

/** @format */

import {AppRegistry} from 'react-native';
import App from './app'
import Index from './app/index';
import Register from './app/register';
import Login from './app/login';
import Forget from './app/forgetPwd';
import Search from './app/search';
import Information from './app/personal-information/home';
import Home from './app/home-page/home-page';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
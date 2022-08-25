import { StyleSheet, Text, View, Pressable, ToastAndroid, Platform, AlertIOS, Vibration } from 'react-native';
import { MoralisProvider } from 'react-moralis'


import './global';
import { registerRootComponent} from 'expo';
const { default: App } = require("./App");



registerRootComponent(App);

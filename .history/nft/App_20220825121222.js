import { StyleSheet, Text, View, Pressable, ToastAndroid, Platform, AlertIOS, Vibration } from 'react-native';
import { MoralisProvider } from 'react-moralis'


import './global';
import { registerRootComponent} from 'expo';
const { default: App } = require("./App");



registerRootComponent(App);
export default function App() {
  const showToast = () => {
    const msg = "This is when we trigger the wallet"

    if (Platform.OS === 'android') {
      Vibration.vibrate([40, 60])
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(msg);
    }
  };

  return (
    <MoralisProvider appId='UisKQCzqPzhxsGmwwaYIXcmAjynyQZXeSY8CdPR9' serverUrl='https://six6fz3lcszz.usemoralis.com:2053/server'>
      <View style={styles.container}>
        <View >
          <Text style={{fontWeight: '600', fontSize: 18, width: '100%'}}>This is a test for 
            <Text style={{fontSize: 50, lineHeight: 42}}>{'\n'}Social</Text>
          </Text>
        </View>

        <View>
          <Text>We are going to test the use of Moralis.io API to validate use cases using their Web3 identity solutions.</Text>
        </View>

        <Pressable style={styles.button} onPress={() => showToast()}>
          <Text>Connect Wallet</Text></Pressable>
      </View>
    </MoralisProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    marginTop: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

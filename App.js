import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
//import WebView from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      // <View style={{flex: 1}}>
      //   <WebView />
      // </View>

      <View style={styles.container}>
        <Text style={styles.instructions}>Hello Vaskar loading in mobile!</Text>
        {/* <WebView
          source={{
            uri:
              'https://blog.bitsrc.io/webview-the-bridge-that-connects-react-native-with-the-web-95a0d5aaa31a',
          }}
          style={styles.martginontop}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  martginontop: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

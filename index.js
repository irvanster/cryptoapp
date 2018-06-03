import { AppRegistry } from 'react-native';
import App from './App';
var ws = new WebSocket('wss://ws-feed.gdax.com');
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
ws.onopen = () => {
  // connection opened
  ws.send(JSON.stringify({
    type: 'subscribe'
}));
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};

AppRegistry.registerComponent('RnDwBoilerplate', () => App);

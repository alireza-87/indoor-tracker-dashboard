import MQTT from 'mqtt';
import {roomList} from './actions/mqttActions'
let mqttclient;

export const middleware = config => ({ dispatch }) => {
  let topic;

  const client = MQTT.connect(config);
      client.on('connect', function () {
        console.log('connected ..... ')
        client.subscribe('testtopic/aliceinwonder')
    })

  client.on('message', ((topic, message) => {
    const msgObj = JSON.parse(message);
    if (topic === 'testtopic/aliceinwonder') {
      dispatch(roomList(msgObj));
    }
  }));
  return next => (action) => {
    console.log('nextaction', action);
    next(action)
  };
};

export default middleware;

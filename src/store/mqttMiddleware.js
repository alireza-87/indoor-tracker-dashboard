import MQTT from 'mqtt';
import {roomList,addRoom} from './actions/mqttActions'

export const middleware = config => ({ dispatch }) => { 
  
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
    console.log('nextaction',JSON.stringify(action.payload));
    switch(action.type){
      case 'ADD_ROOM':
        client.publish('dashboard/command',JSON.stringify(action.payload))
          break
          default:
            break
    }
    //client.publish('testtopic/aliceinwonder','This is a test message')
    next(action)
  };
};

export default middleware;

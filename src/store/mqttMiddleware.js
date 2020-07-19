import MQTT from 'mqtt';
import {roomList,result} from './actions/mqttActions'

export const middleware = config => ({ dispatch }) => { 
  
  const client = MQTT.connect(config);
      client.on('connect', function () {
        console.log('connected ..... ')
        client.subscribe('dashboard/#')
    })

  client.on('message', ((topic, message) => {
    console.log(message)
    const msgObj = JSON.parse(message);
    if (topic === 'dashboard/data/roomList') {
      dispatch(roomList(msgObj));
    }else if (topic === 'dashboard/result/success') {
      dispatch(result(msgObj))
    }else if (topic === 'dashboard/result/fail') {
      dispatch(result(msgObj))
    }
  }));

  return next => (action) => {
    console.log('nextaction',JSON.stringify(action.payload));
    switch(action.type){
      case 'ADD_ROOM':
        client.publish('command/c/s',JSON.stringify(action.payload))
          break
          default:
            break
    }
    //client.publish('testtopic/aliceinwonder','This is a test message')
    next(action)
  };
};

export default middleware;

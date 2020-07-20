import MQTT from 'mqtt';
import {roomCount,roomList,result} from './actions/roomActions'
import * as actionType from './actionType'
export const middleware = config => ({ dispatch }) => { 
  const clientId=Math.floor(Math.random() * 10000) + 1
  const client = MQTT.connect(config);
      client.on('connect', function () {
        console.log('connected ..... ')
        client.subscribe('dashboard/'+clientId+'/#')
        client.subscribe('update/room')
    })

  client.on('message', ((topic, message) => {
    console.log(topic)
    const msgObj = JSON.parse(message);
    if (topic === 'dashboard/'+clientId+'/data/roomList') {
      console.log('get room list')
      dispatch(roomList(msgObj));
    }else if (topic === 'dashboard/'+clientId+'/data/roomCount') {
      console.log('get room count',msgObj)
      dispatch(roomCount(msgObj));
    }else if (topic === 'update/room') {
      console.log('get room count',msgObj)
      dispatch(roomCount(msgObj));
    }else if (topic === 'dashboard/'+clientId+'/result/success') {
      dispatch(result(msgObj))
    }else if (topic === 'dashboard/'+clientId+'/result/fail') {
      dispatch(result(msgObj))
    }
  }));

  return next => (action) => {
    console.log('nextaction',action.type);
    switch(action.type){
      case actionType.ADD_ROOM:
        client.publish('command/'+clientId+'/s',JSON.stringify(action.payload))
          break
        case actionType.GET_ROOM_LIST:
          client.publish('command/'+clientId+'/s',JSON.stringify(action.payload))
            break
            case actionType.GET_ROOM_COUNT:
              client.publish('command/'+clientId+'/s',JSON.stringify(action.payload))
                break
    
          default:
            break
    }
    //client.publish('testtopic/aliceinwonder','This is a test message')
    next(action)
  };
};

export default middleware;

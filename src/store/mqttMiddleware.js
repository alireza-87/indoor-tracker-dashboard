import MQTT from 'mqtt';
import {roomCount,roomList,result} from './actions/roomActions'
import {users,personOfRoom} from './actions/personsAction'

import * as actionType from './actionType'
export const middleware = config => ({ dispatch }) => { 
  
  const clientId=Math.floor(Math.random() * 10000) + 1
  let client = null

  function initConnection(){
    client = MQTT.connect(config);
        client.on('connect', function () {
          console.log('connected ..... ')
          client.subscribe('dashboard/'+clientId+'/#')
          client.subscribe('update/room')
      })
  
    client.on('message', ((topic, message) => {
      console.log(" 9999999999 >",topic)
  
      const msgObj = JSON.parse(message);
      console.log(" 8888888888 >",msgObj)
  
      if (topic === 'dashboard/'+clientId+'/data' && msgObj.type==='roomList') {
        console.log('get room list')
        dispatch(roomList(msgObj));
      }else if (topic === 'dashboard/'+clientId+'/data'&& msgObj.type==='roomCount') {
        console.log('get room count',msgObj)
        dispatch(roomCount(msgObj));
      }else if (topic === 'dashboard/'+clientId+'/data'&& msgObj.type==='personList') {
        console.log('get personList',msgObj)
        dispatch(users(msgObj));
      }else if (topic === 'dashboard/'+clientId+'/data'&& msgObj.type==='personOfRoom') {
        console.log('get of room',msgObj)
        dispatch(personOfRoom(msgObj));
      }else if (topic === 'update/room') {
        console.log('update room count',msgObj)
        dispatch(roomCount(msgObj));
      }else if (topic === 'dashboard/'+clientId+'/result/success') {
        dispatch(result(msgObj))
      }else if (topic === 'dashboard/'+clientId+'/result/fail') {
        dispatch(result(msgObj))
      }
    }));
  }

  return next => (action) => {
    console.log('nextaction',action.type);
    if(action.type === actionType.INIT_MQTT){
      initConnection()
      return
    }

    if(!client){
      next(action)
      return
    }
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
                case actionType.ADD_PERSON:
                  client.publish('command/'+clientId+'/s',JSON.stringify(action.payload))
                    break
                    case actionType.GET_PERSON_LIST:
                      client.publish('command/'+clientId+'/s',JSON.stringify(action.payload))
                        break
                        case actionType.GET_PERSON_LIST_OF_ROOM:
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

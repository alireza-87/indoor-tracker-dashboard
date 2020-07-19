import { ROOM_LIST } from '../actions/mqttActions';

const devices = (state = {}, action) => {
  console.log('reducer',action);
  console.log('====reducer',action.payload);

  switch (action.type) {
    case ROOM_LIST:
      return {
        ...action.rooms,
      };
    case 'ADD_ROOM':
      return {
        ...action.rooms,
      };
    case 'RESULT':
      return{
        ...action.payload,
      }
    default:
      return state;
  }
};

export default devices;

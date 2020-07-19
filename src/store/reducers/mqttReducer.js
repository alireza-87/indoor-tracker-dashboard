import { ROOM_LIST } from '../actions/mqttActions';

const devices = (state = {}, action) => {
  console.log('reducer',action);
  switch (action.type) {
    case ROOM_LIST:
      return {
        ...action.rooms,
      };
    default:
      return state;
  }
};

export default devices;

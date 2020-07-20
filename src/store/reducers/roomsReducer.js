import * as actionType from '../actionType'

const mqttReducer = (state = {}, action) => {
  console.log('mqttReducer actio  > ',action);
  console.log('mqttReducer state > ',state);

  switch (action.type) {
    case actionType.ROOM_LIST:
      return {
        ...action.rooms,
      };
    case actionType.ADD_ROOM:
      return {
        ...action.rooms,
      };
    default:
      return state;
  }
};

export default mqttReducer;

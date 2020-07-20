import * as actionType from '../actionType'

const roomReducer = (state = {}, action) => {
  console.log('roomReducer actio  > ',action);
  console.log('roomReducer state > ',state);

  switch (action.type) {
    case actionType.ROOM_LIST:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;

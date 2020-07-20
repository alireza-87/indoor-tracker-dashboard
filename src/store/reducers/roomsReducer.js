import * as actionType from '../actionType'
let globalId=0

const roomReducer = (state = [], action) => {
  console.log('roomReducer actio  > ',action);
  console.log('roomReducer state > ',state);

  switch (action.type) {
    case actionType.ROOM_LIST:
      return [
        ...action.payload.rooms,
      ];
    default:
      return state;
  }
};

export default roomReducer;

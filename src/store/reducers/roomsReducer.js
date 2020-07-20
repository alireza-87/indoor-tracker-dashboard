import * as actionType from '../actionType'

const roomReducer = (state = [], action) => {
  console.log('roomReducer actio  > ',action);
  console.log('roomReducer state > ',state);

  switch (action.type) {
    case actionType.ROOM_LIST:
      return [
        ...action.payload.rooms,
      ];
    case actionType.ROOM_COUNT:
      return state.map(item => item.floor === action.payload.rooms.floor && item.room === action.payload.rooms.room ? {...item,counter:action.payload.rooms.count} : item )
    default:
      console.log("OPS2: ",action.type)
      return state;
  }
};

export default roomReducer;
